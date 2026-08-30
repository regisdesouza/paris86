export function PreviaComanda({
    nome,
    carboidratoId,
    proteinaId,
    vegetalId,
    gorduraId,
    temperoId,
    ingredientes
}) {

    function buscarIngrediente(id) {
        for (let i = 0; i < ingredientes.length; i++) {
            if (ingredientes[i].id === Number(id)) {
                return ingredientes[i];
            }
        }
        return null;
    }

    const carboidrato = buscarIngrediente(carboidratoId);
    const proteina = buscarIngrediente(proteinaId);
    const vegetal = buscarIngrediente(vegetalId);
    const gordura = buscarIngrediente(gorduraId);
    const tempero = buscarIngrediente(temperoId);

    let preenchidos = 0;
    if (carboidrato) preenchidos = preenchidos + 1;
    if (proteina) preenchidos = preenchidos + 1;
    if (vegetal) preenchidos = preenchidos + 1;
    if (gordura) preenchidos = preenchidos + 1;
    if (tempero) preenchidos = preenchidos + 1;

    let total = 0;
    if (carboidrato) total = total + carboidrato.preco;
    if (proteina) total = total + proteina.preco;
    if (vegetal) total = total + vegetal.preco;
    if (gordura) total = total + gordura.preco;
    if (tempero) total = total + tempero.preco;

    return (
        <section>
            <h2>Prévia da comanda</h2>

            <p>{nome ? nome : "Novo prato"}</p>

            <p>Carboidrato: {carboidrato ? carboidrato.nome : "--"}</p>
            <p>Proteína: {proteina ? proteina.nome : "--"}</p>
            <p>Vegetal: {vegetal ? vegetal.nome : "--"}</p>
            <p>Gordura: {gordura ? gordura.nome : "--"}</p>
            <p>Tempero: {tempero ? tempero.nome : "--"}</p>

            <p>Total: R$ {total.toFixed(2)}</p>

            <p>Balanço nutricional: {preenchidos} / 5 grupos</p>
        </section>
    );
}