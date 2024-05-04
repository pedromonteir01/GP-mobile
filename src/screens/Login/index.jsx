import { View, Text, ImageBackground, ScrollView, Image, onPressButton, TouchableOpacity } from "react-native-web";
import styles from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export default function login() {
    return (
        <ScrollView>
      <View style={styles.container}>
            <ImageBackground source={require("../../../assets/images/backGround.jpeg")} resizeMode="cover" style={styles.image}></ImageBackground>
     <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />
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

      <Text Text style={styles.subTitle3}>___________ou entre com___________</Text>


   <View style={styles.icons}> 
   <AntDesign name="google" size={24}  />
   <FontAwesome6 name="x-twitter" size={24}  />
   <FontAwesome6 name="facebook-f" size={24}  />
   </View>



      <TouchableOpacity
        onPress={onPressButton}
        style={styles.buttonEntar} 
      >
        <Text style={styles.buttonEntar2}>Entrar</Text>
      </TouchableOpacity>

  <Text style={styles.subTitle}>Ainda não é um usuário cadastrado?</Text>
  <Text style={styles.subTitle2}>Crie sua conta agora!</Text>

     </View>

      </ScrollView>
    )
};