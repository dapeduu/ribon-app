import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useRouteParams } from "hooks/useRouteParams";
import UserAvatarIcon from "../assets/UserAvatarIcon";
import S from "./styles";

function SentMagicLinkEmailScreen() {
  const { t } = useTranslation("translation", {
    keyPrefix: "auth.sentMagicLinkEmailScreen",
  });

  const {
    params: { email },
  } = useRouteParams<"SentMagicLinkEmailScreen">();
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={S.keyboardView}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -20}
    >
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={Keyboard.dismiss}
      >
        <ScrollView contentContainerStyle={S.container}>
          <View style={S.imageContainer}>
            <UserAvatarIcon />
          </View>

          <View style={S.contentContainer}>
            <Text style={S.title}>{t("title")}</Text>
            <Text style={S.description}>{t("text", { email })}</Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SentMagicLinkEmailScreen;
