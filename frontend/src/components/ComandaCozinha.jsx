import { useState, useEffect, useRef } from "react";
import axios from "axios";

export function ComandaCozinha({ atualizar }) {

    const [comanda, setComanda] = useState([]);
    const timersIniciados = useRef([]);

    function buscarComanda() {
        axios.get("http://localhost:8080/restaurante/comanda")
            .then(resposta => setComanda(resposta.data));
    }

    useEffect(() => {
        buscarComanda();
    }, [atualizar]);

    useEffect(() => {
        const idsDosTimers = [];

        for (let i = 0; i < comanda.length; i++) {
            const pedido = comanda[i];

            if (pedido.status === "EM PREPARO" && !timersIniciados.current.includes(pedido.id)) {
                timersIniciados.current.push(pedido.id);

                const idDoTimer = setTimeout(() => {
                    axios.put("http://localhost:8080/restaurante/comanda/" + pedido.id, {
                        status: "ENTREGUE"
                    }).then(() => {
                        buscarComanda();
                    });
                }, 30000);

                idsDosTimers.push(idDoTimer);
            }
        }

        return () => {
            for (let i = 0; i < idsDosTimers.length; i++) {
                clearTimeout(idsDosTimers[i]);
            }
        };
    }, [comanda]);

    return (
        <section>
            <h2>Comanda da cozinha</h2>
            {comanda.map(pedido =>
                <div key={pedido.id}>
                    <p>{pedido.nomePrato}</p>
                    <p>R$ {pedido.total}</p>
                    <p>{pedido.status}</p>
                </div>
            )}
        </section>
    );
}