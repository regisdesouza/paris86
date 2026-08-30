import { useState, useEffect } from "react";
import axios from "axios";
import styles from '../style.module.css'

export function Cardapio({
    setNome,
    setCarboidratoId,
    setProteinaId,
    setVegetalId,
    setGorduraId,
    setTemperoId
}) {

    const [cardapio, setCardapio] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/restaurante/cardapio")
            .then(resposta => setCardapio(resposta.data));
    }, []);

    function usarPratoDoCardapio(prato) {
        setNome(prato.prato);
        setCarboidratoId(String(prato.carboidratoId));
        setProteinaId(String(prato.proteinaId));
        setVegetalId(String(prato.vegetalId));
        setGorduraId(String(prato.gorduraId));
        setTemperoId(String(prato.temperoId));
    }

    return (
        <section className={styles.cardapioSecao}>
            <h2>Cardápio da casa</h2>

            <div className={styles.cardapioLista}>
                {cardapio.map(card =>
                    <div
                        key={card.id}
                        className={styles.cardapioCard}
                        onClick={() => usarPratoDoCardapio(card)}
                    >
                        <div className={styles.cardapioEmote}>{card.emote}</div>
                        <div className={styles.cardapioNome}>{card.prato}</div>
                        <div className={styles.cardapioDescricao}>{card.descricao}</div>
                        <div className={styles.cardapioPreco}>R$ {card.preco.toFixed(2)}</div>
                    </div>
                )}
            </div>
        </section>
    );
}