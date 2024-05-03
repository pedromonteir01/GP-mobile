import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    width: "120vw",
    height:"100vh"
  },

  subTitle:{
     textAlign:"center",
     color:"#515151",
     marginTop:"20px",
     fontSize:"16px"

  },

  logo:{
    width:"200px",
    height:"80px",
    marginTop:"30px",
        marginLeft:"90px"
  },

  button:{
backgroundColor: "#c1c2c1", opacity:"40%",
borderRadius:"5px",
height:"55px",
width:"85vw",
margin:"20px"
  },
  textButton:{
    color:"#000000",
    fontSize:"20px",
    marginTop:"10px",
    marginLeft:"10px"
  },

  buttonsView:{
  
    marginTop:"100px", 
  }



});

export default styles;