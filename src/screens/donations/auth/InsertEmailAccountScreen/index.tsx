import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Button from "components/atomics/buttons/Button";
import { isValidEmail } from "lib/validators";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import InputText from "components/atomics/inputs/InputText";
import Image from "components/atomics/Image";
import useFormattedImpactText from "hooks/useFormattedImpactText";
import usePageView from "hooks/usePageView";
import PrivacyPolicyLayout from "components/moleculars/layouts/PrivacyPolicyLayout";
import { useAuthentication } from "contexts/authenticationContext";
import { logEvent } from "services/analytics";
import { useRouteParams } from "hooks/useRouteParams";
import { setLocalStorageItem, theme } from "@ribon.io/shared";
import { showToast } from "lib/Toast";
import { useTickets } from "contexts/ticketsContext";
import { ALREADY_RECEIVED_TICKET_KEY } from "screens/donations/CausesScreen/TicketSection";
import { useNavigation } from "hooks/useNavigation";
import useDonationFlow from "hooks/useDonationFlow";
import DonationInProgressSection from "../DonationInProgressSection";
import S from "./styles";

function InsertEmailAccountScreen() {
  const {
    params: { nonProfit },
  } = useRouteParams<"InsertEmailAccountScreen">();
  usePageView("P12_view", { nonProfitId: nonProfit.id });
  const { t } = useTranslation("translation", {
    keyPrefix: "donations.auth.insertEmailAccountScreen",
  });
  const [email, setEmail] = useState("");

  const { sendAuthenticationEmail } = useAuthentication();
  const { handleDonate } = useDonationFlow();
  const { formattedImpactText } = useFormattedImpactText();
  const { navigateTo } = useNavigation();
  const { setTickets } = useTickets();

  const [isDonating, setIsDonating] = useState(false);
  const [donationSucceeded, setDonationSucceeded] = useState(false);

  const onContinue = () => {
    setIsDonating(true);
    logEvent("P12_continueBtn_click", { nonProfitId: nonProfit.id });
  };

  const onDonationSuccess = () => {
    setDonationSucceeded(true);
    setLocalStorageItem(ALREADY_RECEIVED_TICKET_KEY, "false");
    logEvent("ticketDonated_end", { nonProfitId: nonProfit.id });
  };

  const onDonationFail = (error: any) => {
    setDonationSucceeded(false);
    setTickets(0);

    showToast({
      type: "error",
      message: error?.response?.data?.formatted_message || t("donationError"),
    });
    navigateTo("CausesScreen", { newState: { failedDonation: true } });
  };

  const onAnimationEnd = useCallback(() => {
    if (donationSucceeded) {
      setTickets(0);
      navigateTo("DonationDoneScreen", { nonProfit, flow: "magicLink" });
    } else {
      const newState = {
        failedDonation: true,
        message: t("donationError"),
      };
      navigateTo("CausesScreen", { newState });
    }
  }, [donationSucceeded]);

  async function donateCallback() {
    await sendAuthenticationEmail({ email });
    await handleDonate({
      nonProfit,
      email,
      onError: onDonationFail,
      onSuccess: onDonationSuccess,
    });
  }

  const handleTextChange = (text: string) => {
    setEmail(text);
  };

  useEffect(() => {
    if (nonProfit) {
      logEvent("P28_view", {
        nonProfitId: nonProfit.id,
        from: "donation_flow",
      });
    }
  }, [nonProfit]);

  const handleButtonPress = async () => {
    if (!isValidEmail(email)) return;
    logEvent("authEmailFormBtn_click", {
      nonProfitId: nonProfit.id,
      from: "donation_flow",
    });

    onContinue();

    donateCallback();
  };

  return (
    <View>
      {isDonating ? (
        <DonationInProgressSection
          nonProfit={nonProfit}
          onAnimationEnd={onAnimationEnd}
        />
      ) : (
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
                <Image
                  style={S.mainImage}
                  source={{ uri: nonProfit.mainImage }}
                  accessibilityIgnoresInvertColors
                />
              </View>
              <View style={S.contentContainer}>
                <Text style={S.title}>{t("title")}</Text>
                <Text style={S.description}>
                  {formattedImpactText(nonProfit, undefined, false, true)}
                </Text>

                <InputText
                  name="email"
                  placeholder={t("emailPlaceholder") || ""}
                  keyboardType="email-address"
                  onChangeText={handleTextChange}
                  value={email}
                  autoCapitalize="none"
                  textContentType="emailAddress"
                  autoFocus
                  containerStyle={S.inputContainer}
                  style={S.input}
                />

                <Button
                  text={t("confirmText")}
                  onPress={handleButtonPress}
                  disabled={!isValidEmail(email)}
                  customStyles={S.button}
                  customTextStyles={{
                    color: theme.colors.neutral10,
                  }}
                />
                <PrivacyPolicyLayout />
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

export default InsertEmailAccountScreen;