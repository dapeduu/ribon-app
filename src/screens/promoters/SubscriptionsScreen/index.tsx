import { useTranslation } from "react-i18next";
import { useSubscriptions } from "@ribon.io/shared/hooks";
import { TouchableOpacity } from "react-native";
import Subscription from "@ribon.io/shared/types/entities/Subscription";
import { useEffect, useState } from "react";
import Icon from "components/atomics/Icon";
import { theme } from "@ribon.io/shared";
import { useLanguage } from "contexts/languageContext";
import {
  add30DaysAndFormatDate,
  stringToLocaleDateString,
} from "lib/formatters/dateFormatter";
import { logEvent } from "services/analytics";
import ArrowLeft from "components/vectors/ArrowLeft";
import { useNavigation } from "hooks/useNavigation";
import { useRouteParams } from "hooks/useRouteParams";
import { formatPrice } from "lib/formatters/currencyFormatter";
import CancelSubscriptionModal from "./CancelSubscriptionModal";
import * as S from "./styles";

export default function SubscriptionsScreen(): JSX.Element {
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.subscriptionsScreen",
  });

  const { userSubscriptions } = useSubscriptions();
  const { subscriptions } = userSubscriptions();
  const [modalVisible, setModalVisible] = useState(false);
  const [subscriptionToBeCanceled, setSubscriptionToBeCanceled] =
    useState<Subscription>({} as Subscription);
  const { params } = useRouteParams<"SubscriptionsScreen">();

  const { navigateTo, popNavigation } = useNavigation();

  const { currentLang } = useLanguage();

  const isClub = (subscription: Subscription) =>
    subscription.offer?.category === "club";
  const isPix = (subscription: Subscription) =>
    subscription.personPayments[subscription.personPayments.length - 1]
      ?.paymentMethod === "pix";

  const nextPaymetAttempt = (subscription: any) =>
    subscription.nextPaymentAttempt
      ? stringToLocaleDateString(subscription.nextPaymentAttempt)
      : add30DaysAndFormatDate(subscription.createdAt, currentLang);

  const formattedAmount = (subscription: Subscription) =>
    subscription.offer &&
    formatPrice(subscription.offer.priceValue, subscription.offer.currency);

  const receiverType = () => {
    if (
      subscriptionToBeCanceled?.receiver &&
      Object.prototype.hasOwnProperty.call(
        subscriptionToBeCanceled?.receiver,
        "nonProfits",
      )
    ) {
      return "cause";
    }
    return "nonProfit";
  };

  const eventParams = () => {
    if (isClub(subscriptionToBeCanceled)) {
      return {
        amount: formattedAmount(subscriptionToBeCanceled),
        from: "club",
      };
    } else if (receiverType() === "nonProfit") {
      return {
        amount: formattedAmount(subscriptionToBeCanceled),
        nonProfitId: subscriptionToBeCanceled.receiver?.id,
      };
    } else {
      return {
        amount: formattedAmount(subscriptionToBeCanceled),
        causeId: subscriptionToBeCanceled.receiver?.id,
      };
    }
  };

  const handleCancelSubscriptionButtonClick = (subscription: Subscription) => {
    setSubscriptionToBeCanceled(subscription);
    logEvent("cancelSubs_click", eventParams());
    setModalVisible(!modalVisible);
  };

  const handleBackButtonClick = () => {
    if (params?.from === "ContributionDoneScreen") {
      navigateTo("PromotersScreen");
    } else {
      popNavigation();
    }
  };

  useEffect(() => {
    logEvent("P25_view");
  }, []);

  return (
    <S.Container>
      <S.Arrow>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={handleBackButtonClick}
          testID="arrow-back-button"
        >
          <ArrowLeft color={theme.colors.brand.primary[600]} />
        </TouchableOpacity>
      </S.Arrow>
      <S.Title>{t("title")} </S.Title>
      <S.SubscriptionsContainer>
        {subscriptions &&
          subscriptions.map((subscription: Subscription) => (
            <S.Card key={subscription.id}>
              <S.IconTextContainer>
                <S.Amount>{formattedAmount(subscription)}</S.Amount>
                {!isPix(subscription) && (
                  <S.IconContainer>
                    <Icon
                      type="outlined"
                      name="delete"
                      size={24}
                      color={theme.colors.neutral10}
                      onPress={() =>
                        handleCancelSubscriptionButtonClick(subscription)
                      }
                    />
                  </S.IconContainer>
                )}
              </S.IconTextContainer>
              <S.Text>
                {!isClub(subscription) && t("to")}
                <S.HighlightedText>
                  {isClub(subscription)
                    ? t("ribonClubTag")
                    : subscription.receiver.name}
                </S.HighlightedText>
              </S.Text>
              <S.InfosText>
                {isPix(subscription) && <S.Text>{t("pixPayment")}</S.Text>}
                <S.Text>
                  {isPix(subscription)
                    ? t("perksExpiration")
                    : t("nextPayment")}
                  <S.HighlightedText>
                    {nextPaymetAttempt(subscription)}
                  </S.HighlightedText>
                </S.Text>
              </S.InfosText>
              {modalVisible && (
                <CancelSubscriptionModal
                  setVisible={setModalVisible}
                  visible={modalVisible}
                  subscriptionId={subscriptionToBeCanceled.id}
                  club={isClub(subscriptionToBeCanceled)}
                  eventParams={eventParams()}
                />
              )}
            </S.Card>
          ))}
      </S.SubscriptionsContainer>
    </S.Container>
  );
}
