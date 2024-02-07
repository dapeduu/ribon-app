import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import TicketIcon from "components/vectors/TicketIcon";
import GrayTicketIcon from "components/vectors/GrayTicketIcon";
import { theme } from "@ribon.io/shared/styles";
import S from "./styles";

type TicketIconTextProps = {
  quantity: number;
  hasDividerBorder?: boolean;
  buttonDisabled?: boolean;
  onClick?: () => void;
};

function TicketIconText({
  quantity,
  hasDividerBorder = false,
  buttonDisabled = false,
  onClick,
}: TicketIconTextProps): JSX.Element {
  const hasTickets = quantity > 0;
  const ticketColor = hasTickets
    ? theme.colors.brand.primary[600]
    : theme.colors.neutral[500];
  const ticketIcon = hasTickets ? <TicketIcon /> : <GrayTicketIcon />;

  const borderStyle = () => {
    if (hasDividerBorder) {
      return {
        borderColor: theme.colors.neutral[100],

        borderRightWidth: 1,
      };
    }
    return {};
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={S.container}
      onPress={onClick}
      disabled={buttonDisabled}
    >
      <View
        style={{
          ...S.ticketSection,
          ...borderStyle(),
        }}
      >
        {ticketIcon}
        <Text style={{ ...S.ticketCounter, color: ticketColor }}>
          {String(quantity)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default TicketIconText;