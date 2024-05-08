import { View, Text, ScrollView } from "react-native";
import listCompanys from "../../models/companys";
import styles from "./styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { ImageBackground } from "react-native-web";

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

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/images/backGround.jpeg")} resizeMode="cover" style={styles.image}></ImageBackground>
            <ScrollView horizontal={false}>
                {
                    companys.length > 0 ? (
                        companys.map((company) => (
                            <View key={company.id} style={styles.blocoPesquisa1}>
                                <Card data={company} />
                            </View>
                        ))
                    ) : (
                        <View style={styles.blocoPesquisa1}>
                        <Text style={styles.Titulo1}> Não há empresas registradas </Text>
                        </View>


                    )
                }
            </ScrollView>
        </View>
    );
}