import { View, Text, ImageBackground, ScrollView, Image, onPressButton, TouchableOpacity } from "react-native-web";
import styles from "./styles";

export default function login() {
    return (
        <ScrollView>
      <View style={styles.container}>
            <ImageBackground source={require("../../../assets/images/backGround.jpeg")} resizeMode="cover" style={styles.image}></ImageBackground>
     <Image source={require("../../../assets/images/testeLogo.jpeg")} style={styles.logo} />
     <View>
     <Text style={styles.subTitle} >Já faz parte da nossa família?</Text>
     </View>

     <View style={styles.buttonsView} >
     <TouchableOpacity
        onPress={onPressButton}
        style={styles.button}
      >
        <Text style={styles.textButton}>Digite seu E-mail.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressButton}
        style={styles.button}
      >
        <Text style={styles.textButton}>Digite sua senha.</Text>
      </TouchableOpacity>
      </View>

      <Text>ou entre com</Text>






      <TouchableOpacity
        onPress={onPressButton}
        style={styles.buttonEntar2}
      >
        <Text style={styles.buttonEntar}>Entrar</Text>
      </TouchableOpacity>

  <Text>Ainda não é um usuário cadastrado?</Text>
  <Text >Crie sua conta AGORA!</Text>

     </View>
      </ScrollView>
    )
};