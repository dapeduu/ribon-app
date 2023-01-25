import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { logEvent } from "services/analytics";
import { useCauses } from "@ribon.io/shared/hooks";
import { Cause } from "@ribon.io/shared/types";
import { useWalletContext } from "contexts/walletContext";
import {
  INITIAL_AMOUNT,
  useCryptoPayment,
} from "contexts/cryptoPaymentContext";
import GroupButtons from "components/moleculars/GroupButtons";
import { theme } from "@ribon.io/shared/styles";
import { Text, View } from "components/Themed";
import { RefreshControl, ScrollView } from "react-native";
import Button from "components/atomics/buttons/Button";
import { showToast } from "lib/Toast";
import MaskedWaveCut from "components/moleculars/MaskedWaveCut";
import { logError } from "services/crashReport";
import { useNavigation } from "hooks/useNavigation";
import SelectCryptoOfferSection from "./SelectCryptoOfferSection";
import styles from "./styles";

function CryptoScreen(): JSX.Element {
  const { connectWallet, wallet } = useWalletContext();
  const {
    cause,
    setCause,
    amount,
    setAmount,
    disableButton,
    handleDonationToContract,
    userBalance,
    tokenSymbol,
    loading: loadingCryptoPayment,
    setLoading,
  } = useCryptoPayment();
  const { navigateTo } = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const { causes, refetch: refetchCauses } = useCauses();

  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportCauseScreen",
  });

  useEffect(() => {
    logEvent("causeSupportScreen_view");
  }, []);

  const causesFilter = () => {
    const causesApi = causes.filter((currentCause) => currentCause.active);
    return causesApi || [];
  };

  useEffect(() => {
    setCause(causesFilter()[0]);
  }, [JSON.stringify(causes)]);
  const resetScreen = () => {
    async function reset() {
      try {
        setRefreshing(true);
        await refetchCauses();
        setAmount(INITIAL_AMOUNT);
        setLoading(false);
      } catch (error) {
        logError(error);
      } finally {
        setRefreshing(false);
      }
    }

    reset();
  };

  const handleCauseClick = (causeClicked: Cause) => {
    logEvent("supportCauseSelection_click", {
      id: causeClicked?.id,
    });

    setCause(causeClicked);
  };

  const onDonationToContractSuccess = () => {
    logEvent("toastNotification_view", {
      status: "transactionProcessed",
    });
    resetScreen();

    showToast(t("successDonationMessage", { amount, tokenSymbol }));
  };

  const handleDonateClick = async () => {
    if (wallet) {
      await handleDonationToContract(onDonationToContractSuccess);
      return;
    }

    connectWallet();
    logEvent("treasureComCicleBtn_click");
  };

  const handleCommunityAddClick = () => {
    navigateTo("CommunityAddModal", { amount: `${amount} ${tokenSymbol}` });
  };

  const communityAddText = () => {
    const PERCENTAGE_OF_INCREASE = 0.2;

    return `+ ${(Number(amount) * PERCENTAGE_OF_INCREASE).toFixed(
      2,
    )} ${tokenSymbol}`;
  };

  const donateButtonText = () => {
    if (loadingCryptoPayment) return "...";
    if (wallet)
      return t("donateButtonText", { value: `${amount} ${tokenSymbol}` });

    return t("connectWalletButtonText");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={resetScreen} />
      }
    >
      <Text style={styles.title}>{t("title")}</Text>
      <GroupButtons
        elements={causesFilter()}
        onChange={handleCauseClick}
        nameExtractor={(element) => element.name}
        backgroundColor={theme.colors.orange40}
        textColorOutline={theme.colors.orange40}
        borderColor={theme.colors.orange40}
        borderColorOutline={theme.colors.orange20}
        indexSelected={0}
      />
      <View style={styles.contentContainer}>
        <MaskedWaveCut
          image={cause?.coverImage}
          imageStyles={styles.supportImage}
        />
        <View style={styles.donateContainer}>
          <View style={styles.givingContainer}>
            <View style={styles.contributionContainer}>
              <SelectCryptoOfferSection
                cause={cause}
                onValueChange={(value: string) => setAmount(value)}
              />
            </View>
            <View style={styles.communityAddContainer}>
              <Text style={styles.communityAddText}>
                {t("communityAddText")}
              </Text>
              <Text style={styles.communityAddValue}>{communityAddText()}</Text>
              <Button
                text={t("communityAddButtonText")}
                onPress={handleCommunityAddClick}
                outline
                customStyles={{
                  borderColor: theme.colors.orange40,
                  marginTop: 8,
                  paddingTop: 4,
                  paddingRight: 4,
                  paddingBottom: 4,
                  paddingLeft: 4,
                }}
                customTextStyles={{
                  color: theme.colors.orange40,
                  fontSize: 11,
                }}
              />
            </View>
          </View>
          {wallet && (
            <Text style={styles.userBalanceText}>
              {t("userBalanceText")}
              {userBalance} {tokenSymbol}
            </Text>
          )}
          <Button
            text={donateButtonText()}
            onPress={handleDonateClick}
            disabled={disableButton()}
            borderColor={theme.colors.orange20}
            backgroundColor={theme.colors.orange20}
            textColor={theme.colors.orange40}
            customTextStyles={{
              fontWeight: "600",
            }}
            customStyles={{
              height: 50,
            }}
          />
          <Text style={styles.refundText}>{t("refundText")}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default CryptoScreen;