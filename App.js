import { useState,useRef } from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'


import api from './scr/Services/api'



export default function App(){

const [cep, setCep] = useState('');
const inputRef = useRef(null);


function limpar(){
  setCep("")
  inputRef.current.focus();
}

async function buscar(){
  if(cep== ''){
    alert('Digite um CEP válido !');
    setCep('');
    return;
  }

  const response = await api.get('/06783020/json')
  console.log(response.data)




}


return(

<View style={myStyles.conteiner}>
  
    <View style={{alignItems: 'center'}}>
      
        <Text style={myStyles.text}>Digite o cep desejado </Text>
        
        <TextInput
          style={myStyles.input}
          placeholder='Ex: 06767020'
          value={cep}
          onChangeText={(texto)=>setCep(texto)}
          keyboardType='numeric'
          ref={inputRef}
        />
  
    </View>

    <View style={myStyles.areaBotoes}>
      
      <TouchableOpacity onPress={buscar} style={[myStyles.botao ,{ backgroundColor: '#0c1bf5ff' }]}>
        <Text style={myStyles.botaoText}>Buscar</Text>
      </TouchableOpacity>

      < TouchableOpacity onPress={limpar}  style={[myStyles.botao ,{ backgroundColor: '#FF0000'}]}>
       <Text style={myStyles.botaoText}>Limpar</Text>
      </TouchableOpacity>
    </View>  

    <View style={myStyles.resultado}>
      <Text style={myStyles.itemText}>CEP: 06767020</Text>
      <Text style={myStyles.itemText}>Logradouro: 06767020</Text>
      <Text style={myStyles.itemText}>Bairro: 06767020</Text>
      <Text style={myStyles.itemText}>Cidade: 06767020</Text>
      <Text style={myStyles.itemText}>Estado: 06767020</Text>

    </View>

  </View>

)

}

const myStyles = StyleSheet.create({
  conteiner:{
    marginTop: 20,
    flex: 1,
    backgroundColor: 'rgba(206, 196, 193, 0.93)'

  },
  text:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'

  },
  input:{
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  areaBotoes:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    
  },
  botao:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
   

  },
  botaoText:{
    fontSize: 20,
    color: '#FFF'
  },
  resultado:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText:{
    fontSize: 22,
  }

  
})