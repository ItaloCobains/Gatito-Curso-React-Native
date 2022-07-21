import React from "react";

import { FlatList } from "react-native";
import Item from "./item";
import StatusCarrinho from './../../components/StatusCarrinho'

const servicos = [
  {
    id: 1,
    nome: "banho",
    preço: 79.9,
    descricao: "Nao de banho no seu gato! mas se precisar nos damos",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "vacina v4",
    preço: 98.9,
    descricao: "1 dose da vacina v4. Seu gato precisa de 2",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "vacina anterabica",
    preço: 99.9,
    descricao: "1 dose da vacina antirabica. Seu gato precisa de 1 por ano",
    quantidade: 3,
  },
];

export default function Carrinho() {
  const total = servicos.reduce((soma, { preço, quantidade }) => soma + (preço * quantidade), 0);

  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
