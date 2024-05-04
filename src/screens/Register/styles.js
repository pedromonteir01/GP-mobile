import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    radioInputs: {
        marginRight: 20,
        marginTop: 10,
        marginLeft: 70,
        marginBottom:5,
        display:"flex",
        flexDirection:"row",
       

    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 3,
        marginTop: 20,
        marginLeft: 15,
       

    },
    radioText: {
        fontSize: 14,
        marginTop: 20,
        marginLeft: 16,
        justifyContent: 'center',
        alignItems: 'center',
   
    },
    wrapper: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    radioBg: {
        backgroundColor: 'black',
        height: 10,
        width: 10,
        marginTop:2,
        marginLeft:2,
        display:"flex",
        flexDirection:"row",
        borderRadius: 20
    },
    handle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    icon: {
        width: 90, 
        height: 90,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 100,
    },
    txt: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        marginTop: 10,
        width: "80%",
        height: 70,
        flexDirection: 'row', 
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    input: {
        flex: 1, 
        paddingHorizontal: 10, 
        fontSize: 16, 
    },
    inputIcon: {
        marginRight: 10,
    },
   
    registerBtnText: {
        color: '#fff', 
        textTransform: 'uppercase',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#B499F0',
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        marginLeft: 110,
        marginBottom: 20,

    },
    textofinal: {
        marginLeft: 50,

    },
    texto2: {
       marginTop: -40,
       alignItems: 'center',
       justifyContent: 'center',
    },
    icones1: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 90,
    },

    logo: {
        width: "200px",
        height: "180px",
        marginLeft: "105px",
        marginBottom:"25px",
        alignItems:"center",
        flexDirection:"row"
      },
      image: {
        flex: 1,
        width: "100vw",
        height: "120vh"
      },

      forms:{
        marginLeft:50
      },
      texto2:{
        marginTop:40,
        fontSize:15,
        marginLeft:25,
       
      },
      texto1:{
        marginTop:20,
        marginLeft:25,
        fontSize:16,
        marginBottom:10,
        textAlign:"center"
      }

});



export default styles;