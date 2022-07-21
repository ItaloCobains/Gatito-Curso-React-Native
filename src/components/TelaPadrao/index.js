import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
} from "react-native";

import estilosGlobal, { cores } from "../../estilos";
import estilos from "./estilos";

export default function TelaPadrao({ children }) {
    return (
        <>
            <SafeAreaView style={estilos.ajusteTela}>
                <StatusBar backgroundColor={cores.roxo} />
                <KeyboardAvoidingView
                    style={estilosGlobal.preencher}
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView>
            <SafeAreaView style={estilos.ajusteTelaBaixo} />
        </>
    );
}
