import { ImageBackground, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import { ScrollView } from "react-native-web";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>

        
      <Text style={styles.minitexto}>Juntos, por um mundo mais verde: GP, agindo hoje para um amanhã sustentável!</Text>
        <Text style={styles.textoprincipal}>
          Nosso compromisso vai além da fabricação. Na GP, acreditamos que a educação e a
          conscientização são essenciais parapromover uma mudança real. Por isso, dedicamos recursos
          significativos para informar e capacitar nossos clientes, parceiros e comunidades sobre práticas
          sustentáveis e a importância de agir agora para proteger nosso planeta.</Text>

        <Text style={styles.Titulo}>Nossos Valores</Text>

        <View style={styles.containerBlocos}>

          <View style={styles.blocos}>
            <Icon name="globe" size={45} color="#A493C2" />
            <Text style={styles.subtitulo}>Sustentabilidade</Text>
            <Text style={styles.textovalores}>Reconhecemos a importância de cuidar do nosso planeta e das comunidades onde operamos. Portanto,
              integramos práticas sustentáveis em todos os aspectos do nosso negócio, desde a cadeia de suprimentos
              até as operações do dia-a-dia. Estamos comprometidos em reduzir nosso impacto ambiental, promover o
              bem-estar social e econômico e criar um legado po
              sitivo para as gerações futuras.</Text>
          </View>

          <View style={styles.blocos}>
            <Icon style={styles.icons} name="credit-card" size={43} color="#A493C2" />
            <Text style={styles.subtitulo}>Eficiência</Text>
            <Text style={styles.textovalores}>Desde a alocação inteligente de recursos até a implementação de práticas inovadoras, priorizamos
              a eficiência em cada etapa do nosso trabalho. Acreditamos que a eficiência não apenas impulsiona o sucesso da empresa, mas também
              contribui para um mundo mais produtivo e sustentável.</Text>
          </View>

          <View style={styles.blocos}>
            <Icon style={styles.icons} name="check" size={45} color="#A493C2" />
            <Text style={styles.subtitulo}>Precisão</Text>
            <Text style={styles.textovalores}>Na GP, a integridade é como a cola que mantém tudo junto. É o nosso compromisso em fazer o que é
              certo, mesmo quando ninguém está olhando. Desde a fase de planejamento até a execução, valorizamos a honestidade e a transparência
              em tudo o que fazemos. É assim que construímos confiança com nossos clientes e comunidades, sempre mantendo nossos padrões elevados
              e nossas consciências limpas.</Text>
          </View>
        </View>



        <Text style={styles.title}>Conheça nosso <Text style={styles.title1}>time</Text></Text>
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

        </ScrollView>
     
    </View>
  );
}
