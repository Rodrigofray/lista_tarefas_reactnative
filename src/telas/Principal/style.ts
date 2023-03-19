import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({



container: {
 
    flex: 1, 
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#363636"

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

  textEvento: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    fontFamily: "Roboto_300Light"
  },
  textData: {
    color: "#6B6B6B",
    fontSize: 16,
    fontFamily: "Roboto_300Light"
  },
  textInputParticipant: {
    flex: 1,
    backgroundColor: "#4F4F4F",
    height: 56,
    borderRadius: 4,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    fontFamily: "Roboto_300Light"
  },
  botaoo: {
    width: 100,
    height: 56,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    fontSize: 20,
  },
  botao: {
    width: 56,
    height: 56,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  textParticipante: {
    marginTop:30,
    fontFamily: "Roboto_300Light",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 40,
    color: "white",
    marginBottom: 26,
  }

});
