import React, { useState } from "react";
import { Text, View } from "react-native";
import Botao from "../../../components/Botao";
import CampoInteiro from "../../../components/CompaInteiro";
import estilos from "./estilos";

export default function Item({
    nome,
    preço,
    descricao,
    quantidade: quantidadeInicial,
}) {
    const [quantidade, setQuandtidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preço * quantidadeInicial);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuandtidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    };

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preço);
    };

    return (
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>
                    {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(preço)}
                </Text>
            </View>
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
                <Botao valor="Remover do carrinho" acao={() => {}} />
            </View>
            <View style={estilos.divisor} />
        </>
    );
}
