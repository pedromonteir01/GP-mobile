import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const Card = ({ name }) => {
    return(
        <View style={styles.container}>
            <Image source={require('')}/>
            <Text>{name}</Text>
        </View>
    )
}

export default Card;