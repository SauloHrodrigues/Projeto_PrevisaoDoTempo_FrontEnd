import { createGlobalStyle } from "styled-components";

 const estiloGlobal = createGlobalStyle`
    @font-face {

            font-family: 'TTSupermolot-Regular';

            src: url('/src/Componentes/EstiloGlobal/Fontes/supermolot-ttf/TT-Supermolot-Regular.ttf') format("ttf");

        }

    @font-face {
        font-family: 'TTSupermolot-Bold';
        src: url('/src/Componentes/EstiloGlobal/Fontes/supermolot-ttf/TT-Supermolot-Bold.ttf') format("ttf");
    }
`;
export default estiloGlobal;