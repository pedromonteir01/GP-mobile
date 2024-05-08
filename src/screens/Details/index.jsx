import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./styles";
import listCompanys from "../../models/companys.js";
import { useNavigation } from "@react-navigation/native";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function Details({ route }) {

    const { data } = route.params;

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
            <View style={styles.subContainer}>
                <Text style={styles.name}>Nome: {data.name}</Text>
                <Text style={styles.email}>E-mail: {data.email}</Text>
                <Text style={styles.cnpj}>CNPJ: {data.cnpj}</Text>
                <Text style={styles.telephone}>Tell: {data.telephone}</Text>
                <Text style={styles.contact}>Deseja contato: {data.contact ? 'Sim' : 'Não'}</Text>
                <View style={styles.btnsContainer} >
                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.edit1} onPress={editCompany}>
                            <Text style={styles.edit2}><CiEdit /></Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.excluir1} onPress={removeCompany}>
                            <Text style={styles.excluir2}><MdDelete /></Text>
                        </TouchableOpacity>

                 
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.subTitle2} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.subTitle2}>Voltar para a pagina inicail!</Text>
                        </TouchableOpacity>
        </View>
    );
}