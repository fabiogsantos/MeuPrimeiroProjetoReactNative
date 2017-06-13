import React, {Component} from 'react'
import {Text, Button} from 'react-native'

export default class MyComponent extends Comment {
    state = {
        valor: this.props.inicial
    }

    constructor(props) {
        super(props)
        // Apenas para terceira e quarta opção para que o this do metodo INC receba o this do componente.
        //this.inc = this.inc.bind(this)
    }

    componentWillReceiveProps(nextPros) {
        this.setState({valor: nextPros.inicial})
    }

    inc(evt) {
      this.setState({valor: Number(this.state.valor) + 1})
    }

    dec(evt) {
      this.setState({valor: Number(this.state.valor) - 1})
    }

    render() {
        return (
          <View>
            <Text>{this.state.valor}</Text>
             {/*Primeira opção para chamar um metodo no OnPress.*/}
            <Button title="Inc" onPress={(evt) => this.inc(evt)}></Button>
             {/*Segunda opção para que o this do metodo INC receba o this do componente.*/}
             {/*<Button title="Inc" onPress={this.inc}></Button>*/}
             {/*Segunda opção para que o this do metodo INC receba o this do componente.*/}
             {/*<Button title="Inc" onPress={this.inc.bind(this)}></Button> */}
            <Button title="Dec" onPress={(evt) => this.dec(evt)}></Button>
          </View>
        )
    }
}

//export default MyComponent;