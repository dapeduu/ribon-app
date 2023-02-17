import { View } from "react-native";
import { useCallback } from "react";
import { useImpact } from "@ribon.io/shared/hooks";
import { useCurrentUser } from "contexts/currentUserContext";
import useFormattedImpactText from "hooks/useFormattedImpactText";
import { useNavigation } from "hooks/useNavigation";
import { useTranslation } from "react-i18next";
import ImpactDonationsVector from "./ImpactDonationsVector";
import NgoImpactCard from "../NgoImpactCard";
import S from "./styles";
import ZeroDonationsSection from "../ZeroDonationsSection";

function DirectDonationsImpactCards(): JSX.Element {
  const { currentUser } = useCurrentUser();
  const { userImpact } = useImpact(currentUser?.id);
  const { formattedImpactText } = useFormattedImpactText();

  const impactItems = useCallback(
    () => userImpact?.filter((item) => item.impact.toString() !== "0") || [],
    [userImpact],
  );
  const hasImpact = impactItems() && impactItems()?.length > 0;
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("translation", {
    keyPrefix: "users.profileScreen.ngoImpactCards.zeroDonationsSection",
  });

  const navigateToPromotersScreen = () => {
    navigateTo("PromotersScreen", {
      isInCommunity: false,
    });
  };

  const impactCardsList = () => (
    <View style={S.cardsContainer}>
      {impactItems()?.map((item) => (
        <View key={item?.nonProfit?.id}>
          <NgoImpactCard
            key={item?.nonProfit.id}
            description={formattedImpactText(
              item.nonProfit,
              Number(item.impact),
              true,
              true,
            )}
            name={item?.nonProfit.name}
            icon={item?.nonProfit.logo}
            onPress={() => {}}
          />
        </View>
      ))}
    </View>
  );

  return hasImpact ? (
    impactCardsList()
  ) : (
    <ZeroDonationsSection
      title={t("direct.title")}
      onButtonPress={navigateToPromotersScreen}
      description={t("direct.description")}
      buttonText={t("direct.buttonText")}
      image={<ImpactDonationsVector />}
    />
  );
}

export default DirectDonationsImpactCards;