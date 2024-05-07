
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";
import { ScrollView } from "react-native";

export default function Home({ navigation }) {
  const pesquisaImages = [
    require("../../../assets/images/image1.png"),
    require("../../../assets/images/image2.png"),
    require("../../../assets/images/image3.png"),
  ];

  const renderCarouselItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleImagePress(index)}>
      <View style={styles.blocoPesquisa}>
        <Image style={styles.imgs} source={item} />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.imagem1}
          source={require("../../../assets/images/gp - sustentabilidade.png")}
        />
        <View style={styles.viewPesquisa}>
          <Text style={styles.titlePesquisa}>Cheque nossas matérias:</Text>
          <View style={styles.carousel}>
            <Carousel
              data={pesquisaImages}
              renderItem={renderCarouselItem}
              sliderWidth={300}
              itemWidth={300}
              loop={true}
              autoplay={true}
              autoplayInterval={3000}
              layout="default"
              style={styles.carousel}
            />
          </View>

          <Text style={styles.linha}>━━━━━━━━━━━━━━━━━━━</Text>

          <View style={styles.blocoServicos}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={styles.imgs1}
                source={require("../../../assets/images/card3.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.blocoServicos}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Image
                style={styles.imgs1}
                source={require("../../../assets/images/card2.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.blocoServicos}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image
                style={styles.imgs1}
                source={require("../../../assets/images/card1.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}