
export function Cardapio() {

    const [cardapio, setCardapio] = useState([]);

    function buscarCardapio(){
        axios.get("http://localhost:8080/restaurante")
        .then(resposta=>setCardapio(resposta.data))   
    }

  return (
    <>
    <section>
      <span>Cardápio da casa</span>
    </section>
    
    <div>
        <div key={card.id}>
        {cardapio.map(card=>
            <div>{card.emote}
                 {card.prato}
                 {card.descricao}
                 {card.preco} 
        </div>)}
    </div>

    </div>
    
    </>
    
  );
}

