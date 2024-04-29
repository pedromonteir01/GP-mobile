import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const Card = ({ data }) => {
    return(
        <View style={styles.container}>
            <Image source={require('')}/>
            <Text>{data.name}</Text>
        </View>
    )
}

export default Card;