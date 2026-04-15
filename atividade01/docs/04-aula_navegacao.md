# Navegação em Aplicações Mobile

## Centro Universitário de Patos de Minas – UNIPAM

**Curso:** Bacharelado em Sistemas de Informação  
**Turma:** 7º Período  
**Disciplina:** Desenvolvimento de Sistemas de Informação Avançados II  
**Professor:** Rafael Marinho e Silva

---

## Como executar os códigos no Codespace do GitHub

1. Vá para o GitHub e crie um novo repositório
2. Dê um nome (ex: `navegacao_react_native`)
3. Clique em **Code > Codespaces**
4. Crie ou abra um Codespace

### Instalar Node.js e npm

```bash
sudo apt update
sudo apt install -y nodejs npm
Navegação em aplicações mobile

A navegação define a experiência do usuário e estrutura do app.
Projetos complexos normalmente combinam vários tipos.

1. Navegação Gaveta (Drawer Navigation)
Estrutura

Menu lateral deslizante

Quando usar
Muitas seções
Funcionalidades secundárias
Vantagens
Interface limpa
Desvantagens
Pode esconder funcionalidades
Criar projeto
npx create-expo-app navgaveta --template blank
cd navgaveta
Instalar dependências
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
npm install @react-navigation/drawer
Expo
npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context react-native-vector-icons
babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
App.js
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
2. Navegação Pilha (Stack Navigation)
Estrutura

Fluxo em pilha (avançar/voltar)

Quando usar
Login
Formulários
Fluxos sequenciais
Criar projeto
npx create-expo-app navpilha --template blank
cd navpilha
Instalar
npm install @react-navigation/native
npm install @react-navigation/stack
Exemplo
navigation.navigate('Details');
navigation.goBack();
3. Navegação por Abas (Bottom Tabs)
Estrutura

Barra inferior

Quando usar
Seções principais independentes
Vantagens
Rápida e intuitiva
Criar projeto
npx create-expo-app navabas --template blank
cd navabas
Instalar
npm install @react-navigation/bottom-tabs
4. Passagem de Parâmetros
Conceito

Enviar dados entre telas

Exemplo
navigation.navigate('Details', { input });
Receber
const { input } = route.params;
5. Navegação com Autenticação
Estrutura

Fluxo condicional:

Logado → App principal
Não logado → Login
Exemplo lógico
{isAuthenticated ? <AppNavigator /> : <LoginScreen />}
Login simulado
if (username === 'user' && password === 'pass') {
  setIsAuthenticated(true);
}
Resumo
Drawer → Menu lateral
Stack → Fluxo linear
Tabs → Navegação principal
Params → Comunicação entre telas
Auth → Controle de acesso
```
