import React from "react";

import { FlatList } from "react-native";
import Item from "./item";

const servicos = [
    {
        id: 1,
        nome: "banho",
        preço: 79.9,
        descricao: "Nao de banho no seu gato! mas se precisar nos damos",
    },
    {
        id: 2,
        nome: "vacina v4",
        preço: 98.9,
        descricao: "1 dose da vacina v4. Seu gato precisa de 2",
    },
    {
        id: 3,
        nome: "vacina anterabica",
        preço: 99.9,
        descricao: "1 dose da vacina antirabica. Seu gato precisa de 1 por ano",
    },
];

export default function Servicos() {
    return (
        <>
            <FlatList
                data={servicos}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </>
    );
}
