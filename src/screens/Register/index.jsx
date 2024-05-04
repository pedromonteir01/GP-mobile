import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground } from "react-native"; // Importação corrigida

import styles from "./styles";
import { useEffect, useState } from "react";
import listCompanys from "../../models/companys.js";
import Company from "../../models/company.js";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function Register({ route }) {

    let { company, edit } = route.params;

    const navigation = useNavigation();

    const [isUpdate, setIsUpdate] = useState(edit);
    console.log(isUpdate);

    const [selectedRadio, setSelectedRadio] = useState(1);

    //data inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telephone, setTelephone] = useState('');
    const [contact, setContact] = useState(true);

    useEffect(() => {
        if (edit) {
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

    useEffect(() => {
        selectedRadio == 1 ? setContact(true) : setContact(false);
    }, [selectedRadio])

    const clearInputs = () => {
        setIsUpdate(false);
        edit = false;
        setName('');
        setEmail('');
        setCnpj('');
        setTelephone('');
        setContact(true);
        setSelectedRadio(1);
    }

    const handleCompany = () => {
        if (isUpdate) {
            listCompanys.putCompany(company.id, name, email, cnpj, telephone, contact);
            console.log(listCompanys.getCompanyById(company.id));
            clearInputs();
        } else {
            const company = new Company(name, email, cnpj, telephone, contact);
            listCompanys.postCompany(company);
            clearInputs();
        }
        navigation.navigate('Companys');
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={require("../../../assets/images/backGround.jpeg")} resizeMode="cover" style={styles.image}></ImageBackground>
                <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />


                <Text style={styles.texto1}>Faça parte da família!</Text>
                {/*  Formulário */}
                <View style={styles.forms}>
                    {/*  Campo dos inputs */}
                    <View style={styles.inputField}>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Razão Social"
                        />
                        <Feather style={styles.icones1}
                            name="home"
                            size={24}
                            color={"#000"}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="E-mail"
                        />
                        <Feather style={styles.icones1}
                            name="mail"
                            size={24}
                            color={"#000"}
                        />
                    </View>


                    <View style={styles.inputField}>
                        <TextInput
                            value={cnpj}
                            onChangeText={setCnpj}
                            placeholder="CNPJ"
                        />
                        <Feather style={styles.icones1}
                            name="map"
                            size={24}
                            color={"#000"}
                        />
                    </View>


                    <View style={styles.inputField}>
                        <TextInput
                            value={telephone}
                            onChangeText={setTelephone}
                            placeholder="Telefone(+55)"
                        />
                        <Feather style={styles.icones1}
                            name="phone"
                            size={24}
                            color={"#000"}
                        />
                    </View>
                    {/*  Radio inputs */}

                    <Text style={styles.texto2}>Gostaria que entrássemos em contato?</Text>
                    <View style={styles.radioInputs}>
                        <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                            <View style={styles.wrapper}>
                                <View style={styles.radio}>
                                    {
                                        selectedRadio == 1 ? <View style={styles.radioBg}></View> : null
                                    }
                                </View>
                                <Text style={styles.radioText}>Sim</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                            <View style={styles.wrapper}>
                                <View style={styles.radio}>
                                    {
                                        selectedRadio == 2 ? <View style={styles.radioBg}></View> : null
                                    }
                                </View>
                                <Text style={styles.radioText}>Não</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.handle}>
                        <View style={styles.button} >
                            <TouchableOpacity onPress={() => handleCompany()}>
                                <Text>{isUpdate ? 'Atualizar' : 'Cadastrar'}</Text>
                            </TouchableOpacity>
                        </View>
                        {isUpdate && (
                            <TouchableOpacity style={styles.registerBtn} onPress={clearInputs}>
                                <Text style={{ textTransform: 'uppercase' }}>Cancelar Edição</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    
                </View>

            </ScrollView>
        </View>
    );
}
