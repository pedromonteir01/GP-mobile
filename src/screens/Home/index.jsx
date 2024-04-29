import { View, Image, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from "react-native-web";


export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.Titulo1}>Bem-Vindos a GP Sustentabilidade!</Text>
        <Text style={styles.Titulo2}>Como podemos ajudar?</Text>
        <Image
          style={styles.imagem1}
          source={require('../../../assets/gp com fundo de plantas.jpeg')}
        />
        <Text style={styles.minitexto}>Juntos, por um mundo mais verde: GP, agindo hoje para um amanhã sustentável!</Text>
        <Text style={styles.textoprincipal}>
          Nosso compromisso vai além da fabricação. Na GP, acreditamos que a educação e a
          conscientização são essenciais parapromover uma mudança real. Por isso, dedicamos recursos
          significativos para informar e capacitar nossos clientes, parceiros e comunidades sobre práticas
          sustentáveis e a importância de agir agora para proteger nosso planeta.</Text>

        <Text style={styles.Titulo}>Nossos Valores</Text>

        <Icon name="globe" size={45} color="#A493C2" />
        <Text style={styles.subtitulo}>Sustentabilidade</Text>
        <Text style={styles.textovalores}>Reconhecemos a importância de cuidar do nosso planeta e das comunidades onde operamos. Portanto,
          integramos práticas sustentáveis em todos os aspectos do nosso negócio, desde a cadeia de suprimentos
          até as operações do dia-a-dia. Estamos comprometidos em reduzir nosso impacto ambiental, promover o
          bem-estar social e econômico e criar um legado positivo para as gerações futuras.</Text>

        <Icon name="credit-card" size={43} color="#A493C2" />
        <Text style={styles.subtitulo}>Eficiência</Text>
        <Text style={styles.textovalores}>Desde a alocação inteligente de recursos até a implementação de práticas inovadoras, priorizamos
          a eficiência em cada etapa do nosso trabalho. Acreditamos que a eficiência não apenas impulsiona o sucesso da empresa, mas também
          contribui para um mundo mais produtivo e sustentável.</Text>

        <Icon name="check" size={45} color="#A493C2" />
        <Text style={styles.subtitulo}>Precisão</Text>
        <Text style={styles.textovalores}>Na GP, a integridade é como a cola que mantém tudo junto. É o nosso compromisso em fazer o que é
          certo, mesmo quando ninguém está olhando. Desde a fase de planejamento até a execução, valorizamos a honestidade e a transparência
          em tudo o que fazemos. É assim que construímos confiança com nossos clientes e comunidades, sempre mantendo nossos padrões elevados
          e nossas consciências limpas.</Text>

        <Text style={styles.subtitulo2}>Para saber mais sobre nossa empresa e se sentir cada vez mais parte dela.</Text>
        <Text style={styles.subtitulo3}>Aqui está a planta da nossa sede!</Text>
      </View>
    </ScrollView>
  );
}
