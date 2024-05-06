import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#F1EBEB',
    },
    image: {
        flex: 1,
        width: "100vw",
        height: "120vh"
      },
    subContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        width: '80%',
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        marginBottom: 5,
    },
    cnpj: {
        fontSize: 16,
        marginBottom: 5,
    },
    telephone: {
        fontSize: 16,
        marginBottom: 5,
    },
    contact: {
        fontSize: 16,
        marginBottom: 5,
    },
    edit2: {
        color: '#fff',
        fontSize: 16,
    },
    excluir2: {
        color: '#fff',
        fontSize: 16,
    },
    excluir1: {
        backgroundColor: '#A493C2',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 80,
        
    },
    edit1: {
        backgroundColor: '#A493C2',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 80,
    },
    btnsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    btns: {
        display: 'flex',
        flexDirection: 'row',
        gap: 6
    }
});

export default styles;