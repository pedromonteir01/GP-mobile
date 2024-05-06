import { View, Image, Text } from "react-native";

import styles from "./styles";
import { ScrollView } from "react-native-web";


export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.Titulo1}> GP Sustentabilidade</Text>
        <Image
          style={styles.imagem1}
          source={require('../../../assets/gp com fundo de plantas.jpeg')}
        />

          <View style={styles.viewPesquisa}>
            <Text style={styles.titlePesquisa} >Descubra mais sobre as atualidades desse tópico!</Text>

            <View style={styles.blocoPesquisa}>
              <Image style={styles.imgs} source={require('../../../assets/images/image1.jpeg')} />
            </View>

            <View style={styles.blocoPesquisa}>
              <Image style={styles.imgs} source={require('../../../assets/images/image2.jpeg')} />
            </View>
            <View style={styles.blocoPesquisa}>
              <Image style={styles.imgs} source={require('../../../assets/images/image3.jpeg')} />
            </View>
          </View>



        </View>

      
    </ScrollView>
  );
}