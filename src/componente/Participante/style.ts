import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor:"#4F4F4F",
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    fontFamily: "Roboto_300Light"
    
  },
  textParticipante: {
    marginLeft: 16,
    fontFamily: "Roboto_300Light",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#FCFDFE",
  },
  botaoC: {
    width: 40,
    height: 40,
    backgroundColor: "trasparet",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    position:"relative",
    Height:"100%",
    right: 0
  },
  botao: {
    width: 40,
    height: 40,
    backgroundColor: "trasparet",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    position:"relative",
    Height:"100%"
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },


});
