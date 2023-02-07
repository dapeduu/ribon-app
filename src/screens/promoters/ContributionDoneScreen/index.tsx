import DoneScreenTemplate from "screens/templates/DoneScreenTemplate";
import { useRouteParams } from "hooks/useRouteParams";
import { useTranslation } from "react-i18next";
import { useNavigation } from "hooks/useNavigation";

export default function ContributionDoneScreen(): JSX.Element {
  const {
    params: { cause, nonProfit },
  } = useRouteParams<"ContributionDoneScreen">();
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.contributionDoneScreen",
  });
  const { navigateTo } = useNavigation();

  return (
    <DoneScreenTemplate
      image={cause?.mainImage || nonProfit?.mainImage}
      buttonTitle={t("buttonTitle") || ""}
      title={t("title") || ""}
      description={`${t("description")} ${cause?.name || nonProfit?.name}`}
      onButtonPress={() => {
        navigateTo("PromotersScreen");
      }}
    />
  );
}