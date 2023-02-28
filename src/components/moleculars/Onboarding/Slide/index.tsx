import React from "react";
import { Dimensions, Text, View } from "react-native";
import Image from "components/atomics/Image";
import S from "./styles";
import ImpactDonationsVector1 from "./ImpactDonationsVector1";

function Slide({ item }: any) {
  const { width } = Dimensions.get('window');

  return (
    <View style={S.container}>
      <Image
        source={item?.image}
        style={{ ...S.image, width }}
      />
      {/* <ImpactDonationsVector1 /> */}

      <View style={{ width, alignItems: "center" }}>
        <Text style={S.title}>{item?.title}</Text>
        <Text style={S.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
}

export default Slide;
