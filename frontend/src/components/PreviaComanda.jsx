import styles from '../style.module.css'

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
        <section className={styles.previaQuadro}>
            <h2>Prévia da comanda</h2>

            <p>{nome ? nome : "Novo prato"}</p>

            <p className={styles.previaLinha}>Carboidrato: {carboidrato ? carboidrato.nome : "--"}</p>
            <p className={styles.previaLinha}>Proteína: {proteina ? proteina.nome : "--"}</p>
            <p className={styles.previaLinha}>Vegetal: {vegetal ? vegetal.nome : "--"}</p>
            <p className={styles.previaLinha}>Gordura: {gordura ? gordura.nome : "--"}</p>
            <p className={styles.previaLinha}>Tempero: {tempero ? tempero.nome : "--"}</p>

            <p className={styles.previaTotal}>Total: R$ {total.toFixed(2)}</p>

            <p className={styles.previaBalanco}>Balanço nutricional: {preenchidos} / 5 grupos</p>
        </section>
    );
}