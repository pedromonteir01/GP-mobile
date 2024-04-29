import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    radioInputs: {
        display: 'flex',
        flexDirection: 'row'
    },
    radio: {
        width: 40,
        height: 40,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 3
    },
    radioText: {
        fontSize: 20
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioBg: {
        backgroundColor: 'black',
        height: 28,
        width: 28,
        margin: 3,
        borderRadius: 20
    },
    handle: {

    }
});

export default styles;