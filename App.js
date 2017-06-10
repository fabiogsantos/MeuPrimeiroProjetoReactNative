import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './components/MyComponent'

export default class App extends Component {
  state = {
    valorInicial: 0
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Button title="Definir Valor"></Button>
        <MyComponent nome="React" inicial="1"/>
      </View>
    );
  }
}