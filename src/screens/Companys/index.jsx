import { View, Text } from "react-native";
import listCompanys from "../../models/companys";
import styles from "./styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

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

        </View>
    );
}