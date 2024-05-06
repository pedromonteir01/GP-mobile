import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import listCompanys from "../../models/companys.js";
import { useNavigation } from "@react-navigation/native";

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

}