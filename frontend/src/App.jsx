import { useState, useEffect } from "react";
import axios from "axios";
import { Cabecalho } from "./components/Cabecalho";
import { Cardapio } from "./components/Cardapio";
import { FormularioPrato } from "./components/FormularioPrato";
import { PreviaComanda } from "./components/PreviaComanda";
import { ComandaCozinha } from "./components/ComandaCozinha";

function App() {

  const [ingredientes, setIngredientes] = useState([]);

  const [nome, setNome] = useState("");
  const [carboidratoId, setCarboidratoId] = useState("");
  const [proteinaId, setProteinaId] = useState("");
  const [vegetalId, setVegetalId] = useState("");
  const [gorduraId, setGorduraId] = useState("");
  const [temperoId, setTemperoId] = useState("");

  const [atualizarComanda, setAtualizarComanda] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/restaurante/ingredientes")
      .then(resposta => setIngredientes(resposta.data));
  }, []);

  function aoEnviarPedido() {
    setAtualizarComanda(atualizarComanda + 1);
  }

  return (
    <>
      <Cabecalho />

      <Cardapio />

      <FormularioPrato
        nome={nome} setNome={setNome}
        carboidratoId={carboidratoId} setCarboidratoId={setCarboidratoId}
        proteinaId={proteinaId} setProteinaId={setProteinaId}
        vegetalId={vegetalId} setVegetalId={setVegetalId}
        gorduraId={gorduraId} setGorduraId={setGorduraId}
        temperoId={temperoId} setTemperoId={setTemperoId}
        ingredientes={ingredientes}
        aoEnviarPedido={aoEnviarPedido}
      />

      <PreviaComanda
        nome={nome}
        carboidratoId={carboidratoId}
        proteinaId={proteinaId}
        vegetalId={vegetalId}
        gorduraId={gorduraId}
        temperoId={temperoId}
        ingredientes={ingredientes}
      />

      <ComandaCozinha atualizar={atualizarComanda} />
    </>
  );
}

export default App;