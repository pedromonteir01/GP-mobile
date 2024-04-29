import { View, Text, ScrollView } from "react-native";
import listCompanys from "../../models/companys";
import styles from "./styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function Companys() {

    const navigation = useNavigation();
    const [ companys, setCompanys ] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
         if(isFocused) {
            const list = listCompanys.getAllCompanys();
            setCompanys(list);
         }
    }, [isFocused]);

    return(
        <View style={styles.container}>
            <ScrollView horizontal={false}>
                <View style={styles.contentCompanys}>
                {
                    companys > 0 ? (
                        companys.map((company) => (
                            <Card data={company}/>
                        ))
                    ) : (
                        <Text> Não há empresas registradas </Text>
                    )
                }
                </View>
            </ScrollView>
        </View>
    );
}