import { Dimensions, View } from "react-native";
import TicketWhiteIcon from "components/vectors/TicketWhiteIcon";
import * as Animatable from "react-native-animatable";
import { useTranslation } from "react-i18next";

import S from "./styles";

type Props = {
  onAnimationEnd: () => void;
  senderIcon?: JSX.Element;
  receiverIcon?: JSX.Element;
  description?: string;
};

const boxAnimation = {
  from: {
    left: 20,
  },
  to: {
    left: Dimensions.get("window").width - 150,
  },
};

const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

function TransferTicketAnimation({ onAnimationEnd, senderIcon, receiverIcon, description }: Props): JSX.Element {
  return (
    <View style={S.containerColumn}>
      <View style={S.containerRow}>
        <View style={S.diamond}>
          <View style={S.diamondImage}>
            {senderIcon}
          </View>
        </View>

        <View style={{ overflow: "hidden" }}>
          <View style={S.stripedLine} />
        </View>

        <Animatable.View
          animation={boxAnimation}
          duration={4000}
          style={S.ticketRoundBox}
        >
          <TicketWhiteIcon />
        </Animatable.View>

        <View style={S.diamond}>
          <View style={S.diamondImage}>
            {receiverIcon}
          </View>
        </View>
      </View>

      <Animatable.Text
        animation={fadeIn}
        duration={4000}
        style={S.text}
        onAnimationEnd={onAnimationEnd}
      >
        {description}
      </Animatable.Text>
    </View>
  );
}

export default TransferTicketAnimation;
