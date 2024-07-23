import React from "react";
import { render } from "@testing-library/react";
import Header from "../src/componentes/Header";
import Logo from "../src/componentes/Logo";

describe('Testes cabeçalho', ()=>{
    it('renderizar cabeçalho', ()=>{
        render(<Header/>);
        render(<Logo/>);
    })

})