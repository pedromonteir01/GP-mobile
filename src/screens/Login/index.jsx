import { View, Text, ImageBackground, ScrollView, Image, onPressButton, TouchableOpacity } from "react-native-web";
import styles from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from "@react-navigation/native";


export default function Login() {

  const navigation = useNavigation();
    return (
      
      <View style={styles.container}>
                                                                                           
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
  <TouchableOpacity  style={styles.subTitle2} onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: 'red' }}>Crie sua conta!</Text>
                </TouchableOpacity>

     </View>

     
    )
};