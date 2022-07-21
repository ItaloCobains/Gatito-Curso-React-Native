import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Botao from "../../../components/Botao";
import CampoInteiro from "../../../components/CompaInteiro";
import estilos from "./estilos";

export default function Item({ nome, preço, descricao }) {
  const [quantidade, setQuandtidade] = useState(1);
  const [total, setTotal] = useState(preço);
  const [expandir, setExpandir] = useState(false);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuandtidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preço);
  };

  const inverterExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  };

  return (
    <>
      <TouchableOpacity
        style={estilos.informacao}
        onPress={inverterExpandir}
      >
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preço)}
        </Text>
      </TouchableOpacity>
      {expandir && (
        <View style={estilos.carrinho}>
          <View>
            <View style={estilos.valor}>
              <Text style={estilos.descricao}>Quantidade:</Text>
              <CampoInteiro
                estilos={estilos.quantidade}
                valor={quantidade}
                acao={atualizaQuantidadeTotal}
              />
            </View>
            <View style={estilos.valor}>
              <Text style={estilos.descricao}>Total:</Text>
              <Text style={estilos.preco}>
                {" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </Text>
            </View>
          </View>
          <Botao valor="Adicionar ao carrinho" acao={() => { }} />
        </View>
      )}
      <View style={estilos.divisor} />
    </>
  );
}
