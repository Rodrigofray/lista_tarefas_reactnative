import React from "react";
import { Text, TouchableOpacity, View,TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./style";
import Checkbox from "@mui/material/Checkbox";
interface Props {
  nome: string
  btnRemover: () => void
  btnFeito: () => void
}


export function Participante({ nome, btnRemover,  btnFeito }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textParticipante} > {nome} </Text>
      
      <TouchableHighlight style={styles.botaoC} onPress={btnFeito}>
      <Checkbox edge="start" tabIndex={-1} disableRipple />
     
      </TouchableHighlight>

      <TouchableOpacity style={styles.botao} onPress={btnRemover}>
      <Icon name="trash" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}
