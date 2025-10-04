import {View,Text, StyleSheet} from 'react-native'

export default function App(){
return(
<View style={myStyles.conteiner}>
  <Text>
    ola mundo de novo
  </Text>
</View>

)

}

const myStyles = StyleSheet.create({
  conteiner:{
    marginTop: 20,
    flex: 1,
    backgroundColor: 'rgba(238, 64, 11, 0.93)'

  }
})