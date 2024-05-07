import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
 
  containerBlocos:{
    margin:20,
    padding:5,
  },

  imagem1: {
    width: 430,
    height:250,
    marginTop: -3,
    borderRadius: 30,
  },

  blocoPesquisa: {
    marginTop:"15px",
    borderRadius: 5,
    height:"28vh",
    padding:5,
    border: "9px outset #ccb4d9",
    borderRadius:"10px"
  },

  titlePesquisa: {
    margin: 20,
    marginTop: 25,
    fontWeight: 'bold',
    color: "#A493C2",
    fontSize: 18,
    marginBottom: -5,
  },

  viewPesquisa:{
    marginTop:"10px",
    backgroundColor: "#fff",
    borderRadius: 10,
    maxWidth: 400,
    marginLeft: -5,
  },

  linha: {
    color: '#A493C2',
    marginLeft: 40,

  },

  imgs:{
    width: "65vw",
    height: "25vh",
    borderRadius:"10px",
  },

  imgs1:{
    width: "80vw",
    height: "18vh",
    gap: 10,
    marginLeft: 20,
    margin: 10,
    borderRadius:"15px",
  },
 
  carousel:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  }
 

});

export default styles;