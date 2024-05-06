import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import listCompanys from "../../models/companys";
import styles from "./styles";


export default function Companys() {
    const navigation = useNavigation();
    const [companys, setCompanys] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            const list = listCompanys.getAllCompanys();
            setCompanys(list);
        }
    }, [isFocused]);

    const editCompany = (companyId) => {
        
    };

    const removeCompany = (companyId) => {
      
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal={false}>
                <View style={styles.contentCompanys}>
                    {companys.length > 0 ? (
                        companys.map((company) => (
                            <Card
                                data={company}
                                key={company.id}
                                editCompany={editCompany}
                                removeCompany={removeCompany}
                            />
                        ))
                    ) : (
                        <View>
                            <Text> Veja nossas parceiras.</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                                <Text >Se junto a GP!</Text>
                            </TouchableOpacity>
                           
                            <Text style={styles.text}> email: {data.email} </Text>
                        
                           



                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
