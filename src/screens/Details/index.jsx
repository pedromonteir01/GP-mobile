import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import listCompanys from "../../models/companys.js";
import { useNavigation } from "@react-navigation/native";

export default function Details({ route }) {

    const { data } = route.params;
    console.log(data);

    const navigation = useNavigation();

    const removeCompany = () => {
        listCompanys.deleteCompany(data.id);
        navigation.navigate('Companys');
    }

    const editCompany = () => {
        navigation.navigate('Register', { company: data, edit: true });
    }

    return (
        <View style={styles.container}>
            {/* quando estilizar, adicionar as tags necessarias, pois abaixo so vai ter como faz pra exibir os dados*/}
            <Text>{data.name}</Text>
            <Text>{data.email}</Text>
            <Text>{data.cnpj}</Text>
            <Text>{data.telephone}</Text>
            <Text>{data.contact ? 'Sim' : 'Não'}</Text>

            <TouchableOpacity onPress={editCompany}>
                <Text>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={removeCompany}>
                <Text>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
}