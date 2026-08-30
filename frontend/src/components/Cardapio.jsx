import { useState, useEffect } from "react";
import axios from "axios";

export function Cardapio() {

    const [cardapio, setCardapio] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/restaurante/cardapio")
            .then(resposta => setCardapio(resposta.data));
    }, []);

    return (
        <>
        <section>
          <span>Cardápio da casa</span>
        </section>

        <div>
            {cardapio.map(card =>
                <div key={card.id}>
                    {card.emote}
                    {card.prato}
                    {card.descricao}
                    {card.preco}
                </div>
            )}
        </div>
        </>
    );
}