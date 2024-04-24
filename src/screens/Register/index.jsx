import { View } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Register({ route }) {

    let { companys, edit } = route.params;

    const [isUpdate, setIsUpdate] = useState(edit);

    //data inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telephone, setTelephone] = useState('');

    return(
        <View style={styles.container}>
            
        </View>
    );
}