import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    radioInputs: {
        marginRight: 20,
        marginTop: 50,
        marginLeft: 20,
    },
    radio: {
        width: 20,
        height: 20,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 3,
        marginTop: 20,
        marginLeft: 20,
        
    },
    radioText: {
        fontSize: 14,
        marginTop: 20,
        marginLeft: 20,
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
        margin: 3,
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
        width: '100%',
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
    registerBtn: {
        backgroundColor: '#007bff', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
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
    // image: {
    //     flex: 1,
    //     width: '100%',
    //     height: '100%'
    //   },
});

export default styles;