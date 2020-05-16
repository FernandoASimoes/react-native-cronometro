import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Cronometro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      inicioPausa: 'INICIAR',
      ultimo: null,
    };

    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {

    if (this.timer != null) {
      // PARA O CRONOMETRO
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ inicioPausa: 'INICIAR' })
    } else {
      // INICIA O CRONOMETRO
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100)
      this.setState({ inicioPausa: 'PAUSAR' })
    }
  };

  limpar() {

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({ 
      numero: 0,
      ultimo: `Ultimo Tempo : ${ this.state.numero.toFixed(2) }s`,
      inicioPausa: 'INICIAR'
     })
  };


  render() {
    return (

      <View style={styles.container}>
        <Image
          source={require('./assets/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnTexto}>{this.state.inicioPausa}</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tempo}>
          <Text style={styles.tempoTexto}>{ this.state.ultimo }</Text>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#069'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#069'
  },
  tempo: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 7

  },
  tempoTexto: {
    color: '#fff',
    fontSize: 30,
    fontStyle:'italic'
  }
})

export default Cronometro;