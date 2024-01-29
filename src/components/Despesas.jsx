import React, { useState } from "react";

function Despesas() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [aux, setAux] = useState([])

    function Exibir(){
        let lista = [...aux]
        lista.push([nome, valor])
        setAux(lista)
    }

    function Delete(e){
        e.target.parentElement.style.display = "none"
    }

    return (
        <div>
            <input
                type="text" value={nome}
                onChange={(e) => setNome(e.target.value)} placeholder="Insira o nome" id="nome"/>
            <input type="number" value={valor}
                   onChange={(e) => setValor(e.target.value)} placeholder="Insira o valor" id="valor"/>
            <button onClick={Exibir}>Enviar</button>
            {aux.map((valores, index) => (
                <div onClick={Delete}>
                    <p>{valores[0]}</p>
                    <p>{valores[1]}</p>
                    <button><i className="fa-solid fa-trash"></i></button>
                </div>))}
        </div>
    );
}

export default Despesas;