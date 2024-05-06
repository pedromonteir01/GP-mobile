import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },

    Titulo1: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: "#A4B5A0",
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

    blocoPesquisa1: {
        marginTop: "20px",
        borderRadius: 5,
        width: "80vw",
        height: "15vh",
        marginLeft: "33px",
        padding: 5,
        margin: "20px",
        border: "9px outset #ccb4d9",
        borderRadius: "10px",
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        flex: 1,
        width: "100vw",
        height: "100vh"
    },
});

export default styles;