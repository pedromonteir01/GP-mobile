import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import listCompanys from "../../models/companys";
import Company from "../../models/company";
import { useNavigation } from "@react-navigation/native";

export default function Register({ route }) {

    let { company, edit } = route.params;

    const navigation = useNavigation();

    const [isUpdate, setIsUpdate] = useState(edit);

    //data inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telephone, setTelephone] = useState('');
    const [contact, setContact] = useState(false);

    useEffect(() => {
        if(isUpdate) {
            setName(company.name);
            setEmail(company.email);
            setCnpj(String(company.cnpj));
            setTelephone(String(company.telephone));
            setContact(Boolean(company.contact));
            //editar
            setIsUpdate(true);
        } else {
            clearInputs();
        }
    }, [company, edit]);

    const clearInputs = () => {
        setIsUpdate(false);
        edit = false;
        setName('');
        setEmail('');
        setCnpj('');
        setTelephone('');
        setContact('');
    }

    const handleCompany = () => {
        if(isUpdate) {
            listCompanys.putCompany(company.id, company.name, company.email, company.cnpj, company.telephone, company.contact);
            clearInputs();
        } else {
            const company = new Company(name, email, cnpj, telephone, contact);
            listCompanys.postCompany(company);
            clearInputs();
        }
        navigation.navigate('Companys');
    }

    return(
        <View style={styles.container}>
            <Image /* photo pelo source={require('imagem link')} */ />
            <Text>Faça parte da família!</Text>
            <Text>Cadastre-se como nossa filial e creça conosco!</Text>
            {/*  Formulário */}
            <View style={styles.forms}>
                {/*  Campo dos inputs */}
                <View style={styles.inputField}>

                    
                </View>
            </View>
        </View>
    );
}