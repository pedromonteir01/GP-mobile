import { ImageBackground, Text, View } from "react-native";

import styles from "./styles";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../assets/images/backGround.jpeg")} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Conheça nosso <Text style={styles.title1}>time</Text>!</Text>
        <View style={styles.text}>
          <Text style={styles.nomes}>
            Nicolly Isabeli
          </Text>

          <Text style={styles.nomes}>
            Isabela Alcantara
          </Text>

          <Text style={styles.nomes}>
            Ana Júlia Pontes
          </Text>

          <Text style={styles.nomes}>
            Manuela Queiroz
          </Text>

          <Text style={styles.nomes}>
            Pedro Monteiro
          </Text>

          <Text style={styles.nomes}>
            Felipe Miotto
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
