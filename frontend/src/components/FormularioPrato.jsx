import axios from "axios";

export function FormularioPrato({
    nome, setNome,
    carboidratoId, setCarboidratoId,
    proteinaId, setProteinaId,
    vegetalId, setVegetalId,
    gorduraId, setGorduraId,
    temperoId, setTemperoId,
    ingredientes,
    aoEnviarPedido
}) {

    const carboidratos = [];
    const proteinas = [];
    const vegetais = [];
    const gorduras = [];
    const temperos = [];

    for (let i = 0; i < ingredientes.length; i++) {
        const item = ingredientes[i];

        if (item.categoria === "carboidrato") carboidratos.push(item);
        else if (item.categoria === "proteina") proteinas.push(item);
        else if (item.categoria === "vegetal") vegetais.push(item);
        else if (item.categoria === "gordura") gorduras.push(item);
        else if (item.categoria === "tempero") temperos.push(item);
    }

    function precoDoIngrediente(id) {
        for (let i = 0; i < ingredientes.length; i++) {
            if (ingredientes[i].id === Number(id)) {
                return ingredientes[i].preco;
            }
        }
        return 0;
    }

    function enviarPedido() {
        const total =
            precoDoIngrediente(carboidratoId) +
            precoDoIngrediente(proteinaId) +
            precoDoIngrediente(vegetalId) +
            precoDoIngrediente(gorduraId) +
            precoDoIngrediente(temperoId);

        const pedido = {
            nomePrato: nome,
            carboidratoId: Number(carboidratoId),
            proteinaId: Number(proteinaId),
            vegetalId: Number(vegetalId),
            gorduraId: Number(gorduraId),
            temperoId: Number(temperoId),
            total: total
        };

        axios.post("http://localhost:8080/restaurante/comanda", pedido)
            .then(() => {
                aoEnviarPedido();
                setNome("");
                setCarboidratoId("");
                setProteinaId("");
                setVegetalId("");
                setGorduraId("");
                setTemperoId("");
            });
    }

    return (
        <section>
            <h2>Montar prato</h2>

            <input
                type="text"
                placeholder="Nome do prato"
                value={nome}
                onChange={nomePrato => setNome(nomePrato.target.value)}
            />

            <select value={carboidratoId} onChange={carboidrato => setCarboidratoId(carboidrato.target.value)}>
                <option value="">Carboidrato</option>
                {carboidratos.map(carboidrato => <option key={carboidrato.id} value={carboidrato.id}>{carboidrato.nome}</option>)}
            </select>

            <select value={proteinaId} onChange={proteina => setProteinaId(proteina.target.value)}>
                <option value="">Proteína</option>
                {proteinas.map(proteina => <option key={proteina.id} value={proteina.id}>{proteina.nome}</option>)}
            </select>

            <select value={vegetalId} onChange={vegetal => setVegetalId(vegetal.target.value)}>
                <option value="">Vegetal</option>
                {vegetais.map(vegetal => <option key={vegetal.id} value={vegetal.id}>{vegetal.nome}</option>)}
            </select>

            <select value={gorduraId} onChange={gordura => setGorduraId(gordura.target.value)}>
                <option value="">Gordura</option>
                {gorduras.map(gordura => <option key={gordura.id} value={gordura.id}>{gordura.nome}</option>)}
            </select>

            <select value={temperoId} onChange={tempero => setTemperoId(tempero.target.value)}>
                <option value="">Tempero</option>
                {temperos.map(tempero => <option key={tempero.id} value={tempero.id}>{tempero.nome}</option>)}
            </select>

            <button onClick={enviarPedido}>Enviar para a cozinha</button>
        </section>
    );
}