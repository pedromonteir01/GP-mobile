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

  imagem1: {
    width: 430,
    height: 250,
    margin: 20,
  },

  blocoPesquisa: {
    marginTop:"20px",
    borderRadius: 5,
    width:"80vw",
    height:"28vh",
    marginLeft:"33px",
    padding:5,
    margin:"20px",
    border: "9px outset #ccb4d9",
    borderRadius:"10px"
    

  },

  viewPesquisa:{
    marginTop:"50px",
   

  },

  imgs:{
    width: "70vw",
    height: "21vh",
    marginLeft:5,
    marginTop:"10px",
    borderRadius:"10px",


  },
  

});

export default styles;