import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import Reactotron from "reactotron-react-native";

import TelaPadrao from "./src/components/TelaPadrao";

import Rotas from "./src/rotas";

Reactotron.configure().useReactNative().connect();

console.tron = Reactotron;

export default function App() {
    return (
        <TelaPadrao>
            <Rotas />
        </TelaPadrao>
    );
}
