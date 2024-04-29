import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Card = ({ data }) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details', { data: data })}>
            <Text>{data.name}</Text>
        </TouchableOpacity>
    )
}

export default Card;