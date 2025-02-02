import LogoFullIcon from "assets/icons/LogoFullIcon";
import { useTranslation } from "react-i18next";
import Button from "components/atomics/buttons/Button";
import { useAuthentication } from "contexts/authenticationContext";
import { useNavigation } from "hooks/useNavigation";
import { theme } from "@ribon.io/shared/styles";
import usePageView from "hooks/usePageView";
import ExpiredLinkIcon from "./assets/ExpiredLinkIcon";
import * as S from "./styles";

function ExpiredLinkScreen() {
  usePageView("P30_view");
  const { t } = useTranslation("translation", {
    keyPrefix: "auth.expiredLinkScreen",
  });

  const { sendAuthenticationEmail } = useAuthentication();
  const { navigateTo } = useNavigation();
  const { accountId } = useAuthentication();

  const sendEmail = async (id: string) => {
    const email = await sendAuthenticationEmail({
      id,
    });
    navigateTo("SentMagicLinkEmailScreen", { email });
  };

  const handleSendMeLinkButton = () => {
    if (accountId) {
      sendEmail(accountId);
    } else {
      navigateTo("CausesScreen");
    }
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <LogoFullIcon />
      </S.LogoContainer>
      <ExpiredLinkIcon />
      <S.Title>{t("expiredLink")}</S.Title>
      <S.Description>{t("expiredLinkText")}</S.Description>
      <Button
        text={accountId ? t("buttonText") : t("buttonTextWithoutEmail")}
        onPress={handleSendMeLinkButton}
        textColor={theme.colors.neutral10}
        borderColor={theme.colors.brand.primary[600]}
        backgroundColor={theme.colors.brand.primary[600]}
      />
    </S.Container>
  );
}

export default ExpiredLinkScreen;
