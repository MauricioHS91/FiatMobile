# FiatMobile
Aulas de mobile

comandos da aula 00 

sudo apt update
sudo apt install -y nodejs npm
npx create-expo-app projeto01 --template blank
npx

(o -y é pra dar yes em tudo aparentemente)


----------------------------------------------------------------------
dentro do APP.JS:

import React from "react";
import {View, Text, StyleSheet} from "react-native-web".

export default function App(){
    return(
        <View>
            <Text>Olá Mundo!!</text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItens : 'center',
        backgroundColor: '#525196'
    },
    text:{
        fontSize:24,
        fontWeight: 'bold',
    },
});