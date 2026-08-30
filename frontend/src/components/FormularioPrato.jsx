import axios from "axios";
import styles from '../style.module.css'

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
        <section className={styles.formularioSecao}>
            <h2>Montar prato</h2>
            <p className={styles.formularioOrigem}>Monte seu prato escolhendo um item de cada categoria.</p>

            <div className={styles.formularioCampo}>
                <input
                    type="text"
                    placeholder="Nome do prato"
                    value={nome}
                    onChange={nomePrato => setNome(nomePrato.target.value)}
                />
            </div>

            <div className={styles.formularioGrade}>
                <div className={styles.formularioCampo}>
                    <div className={styles.formularioLabel}>
                        Carboidrato <span className={`${styles.tag} ${styles.tagBase}`}>base</span>
                    </div>
                    <select value={carboidratoId} onChange={carboidrato => setCarboidratoId(carboidrato.target.value)}>
                        <option value="">— nenhum —</option>
                        {carboidratos.map(carboidrato => <option key={carboidrato.id} value={carboidrato.id}>{carboidrato.nome}</option>)}
                    </select>
                </div>

                <div className={styles.formularioCampo}>
                    <div className={styles.formularioLabel}>
                        Proteína <span className={`${styles.tag} ${styles.tagForca}`}>força</span>
                    </div>
                    <select value={proteinaId} onChange={proteina => setProteinaId(proteina.target.value)}>
                        <option value="">— nenhuma —</option>
                        {proteinas.map(proteina => <option key={proteina.id} value={proteina.id}>{proteina.nome}</option>)}
                    </select>
                </div>

                <div className={styles.formularioCampo}>
                    <div className={styles.formularioLabel}>
                        Vegetal <span className={`${styles.tag} ${styles.tagFresh}`}>fresh</span>
                    </div>
                    <select value={vegetalId} onChange={vegetal => setVegetalId(vegetal.target.value)}>
                        <option value="">— nenhum —</option>
                        {vegetais.map(vegetal => <option key={vegetal.id} value={vegetal.id}>{vegetal.nome}</option>)}
                    </select>
                </div>

                <div className={styles.formularioCampo}>
                    <div className={styles.formularioLabel}>
                        Gordura <span className={`${styles.tag} ${styles.tagExtra}`}>extra</span>
                    </div>
                    <select value={gorduraId} onChange={gordura => setGorduraId(gordura.target.value)}>
                        <option value="">— nenhuma —</option>
                        {gorduras.map(gordura => <option key={gordura.id} value={gordura.id}>{gordura.nome}</option>)}
                    </select>
                </div>
            </div>

            <div className={styles.formularioCampo}>
                <div className={styles.formularioLabel}>
                    Tempero <span className={`${styles.tag} ${styles.tagToque}`}>toque</span>
                </div>
                <select value={temperoId} onChange={tempero => setTemperoId(tempero.target.value)}>
                    <option value="">— nenhum —</option>
                    {temperos.map(tempero => <option key={tempero.id} value={tempero.id}>{tempero.nome}</option>)}
                </select>
            </div>

            <button className={styles.formularioBotao} onClick={enviarPedido}>Enviar para a cozinha</button>
        </section>
    );
}