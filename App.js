import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './components/MyComponent';
import logo from './img/tyrion.jpg';

export default class App extends Component {
  state = {
    valorInicial: 1
  }

  // render() {
  //   return (
  //     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  //       {/*Vermelhor*/}
  //       <View style={[{flex:1, flexDirection:'column', backgroundColor:'#FF0000', justifyContent:'flex-start', alignItems:'flex-start'}]}/>
  //       {/*// Verde*/}
  //       <View style={[{flex:1, flexDirection:'column', backgroundColor:'#00FF00', justifyContent:'flex-start', alignItems:'flex-end'}]}/>
  //       {/*// Amarelo*/}
  //       <View style={[{flex:1, flexDirection:'column', backgroundColor:'#FFFF00', justifyContent:'flex-end', alignItems:'flex-end'}]}/>
  //       {/*// Azul*/}
  //       <View style={[{flex:1, flexDirection='column', backgroundColor='#0101DF', justifyContent:'flex-end', alignItems:'flex-start'}]}/>
  //       <View style={{flex:15, justifyContent:'center', alignItems:'center'}}>
  //         <Text>
  //           Olá React Native
  //         </Text>
  //       </View>
  //       <View style={{flex:15, justifyContent:'center', alignItems:'center'}}>
  //         <Button title="Definir Valor" onPress={()=>this.setState({valorInicial: 2})}></Button>
  //         <MyComponent nome="React" inicial={this.state.valorInicial}/>
  //       </View>  
  //     </View>
  //   );
  // }

  // render() {
  //   return (
  //     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  //       <Image
  //         style={styles.imageCicle}
  //         source={logo}
  //       />        
  //       <Text style={styles.textTitle}>Tyrion Lannister</Text>
  //     </View>
  //   )
  // }

  render() {
    return (
      <View style={{heigth: 100, flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems:'stretch'}}>
        <View style={{flex:1, justifyContent:'flex-start', alignItems:'flex-start'}}>
          <Image
            style={styles.image}
            source={logo}
          />        
        </View>  
        <View style={{flex:4, flexDirection:'column', flexwrap: wrap, justifyContent:'flex-start', alignItems:'flex-end'}}>
          <Text style={styles.textTitle}>Tyrion Lannister</Text>
          <Text style={styles.textContent}>dkjasldkjasldjasldjasldasjdlasjdasldkjasldkjasdl</Text>
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageCicle: {
    width:200,
    heigth:107,
    borderader: 200
  },
  imageFull: {
    width:200,
    heigth:107
  },
  textTitle: {
    
  },
  textContent: {

  }
})