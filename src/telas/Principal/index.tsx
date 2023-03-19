import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View,  } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Participante } from "../../componente/Participante";
import { styles } from "./style";





export default function Principal() {

  const [participantes, setParticipantes] = useState<String[]>([])
  const [participante, setParticipante] = useState("")

  
  



  function adicionarParticipante() {

    if (participantes.includes(participante.trim())) {
      return console.log(participante, "- encontrado");
    } else if (participante == "" || participante == null) {
      return console.log("encontrado vazio ou null");
    } else {
      setParticipantes(prevState => [...prevState, participante]);
    }
   
  }

  function removerParticipante(nome: string) {

    setParticipantes(prevState => prevState.filter(participante => participante !== nome));

  }

  function tarefaFeita()
  {
  }

 
 
  return (
 

    

      <View style={styles.container}>
       
    

        <StatusBar style="auto" />
        <Text style={styles.textEvento}>Lista de Tarefas</Text>
        <Text style={styles.textData}> </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.textInputParticipant}
            placeholder="Adicionar Tarefa"
            placeholderTextColor="white"
            onChangeText={setParticipante} />
           
          <TouchableOpacity style={styles.botaoo} onPress={adicionarParticipante}>
            <Text style={styles.botaoTexto}>ADICIONAR</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textParticipante}>Minhas Tarefas</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {participantes.map((participante, index,) => (
            <Participante
              key={index}
              nome={String(participante)}
              btnRemover={() => removerParticipante(String(participante))} 
             btnFeito={()=> tarefaFeita()}
              />
          ))}
        </ScrollView>


      </View>
      
  );
  
}
function markDone(id: any): void {
  throw new Error("Function not implemented.");
}

function setToDo(newTask: (task: any) => any) {
  throw new Error("Function not implemented.");
}

