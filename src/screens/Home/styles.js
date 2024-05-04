import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1EBEB"
  },
  Titulo1:{
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: "#A493C2"
  },

  containerBlocos:{
    margin:20,
    padding:5,
  
  },

  blocos: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width:"90vw",
    padding:5,
    margin:"20px",
    WebkitBoxShadow: '10px 10px 18px 0px rgba(219,164,219,1)',
    MozBoxShadow: '10px 10px 18px 0px rgba(219,164,219,1)',
    boxShadow: '10px 10px 18px 0px rgba(219,164,219,1)',
  },
  
  Titulo2:{
    fontSize: 17,
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: "#9AB193"
  },

  imagem1: {
    width: 430,
    height: 250,
    margin: 20,
  },
  minitexto: {
    fontSize: 18,
    margin: 5,
    marginLeft: 15,
    fontWeight: 'bold',
    color: "#A493C2",
    fontFamily: 'sans-serif',
  },
  textoprincipal: {
    margin: 10,
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  Titulo: {
    fontSize: 23,
    margin: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: "#9AB193"
  },
  subtitulo: {
    fontSize: 18,
    textAlign:"center",
    color: "#9AB193",
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  
  

  textovalores: {
    fontSize: 15,
    margin: 10,
    fontFamily: 'sans-serif',
  },
  subtitulo2: {
    fontSize: 19,
    margin: 23,
    color: "#A493C2",
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  subtitulo3: {
    fontSize: 16,
    color: "#9AB193",
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },

  blocoPesquisa: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width:"40vw",
    height:"20vh",
    padding:5,
    margin:"20px",
    WebkitBoxShadow: '10px 10px 5px 0px rgba(193,245,188,1)',
    MozBoxShadow: '10px 10px 5px 0px rgba(193,245,188,1)',
    boxShadow: '10px 10px 5px 0px rgba(193,245,188,1)',
  },

  imgs:{
    width: 90,
    height: 40,
    marginLeft: 3,
    
  }

});

export default styles;
