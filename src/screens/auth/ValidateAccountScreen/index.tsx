import { useTranslation } from "react-i18next";
import usePageView from "hooks/usePageView";
import { useNavigation } from "hooks/useNavigation";
import { useCurrentUser } from "contexts/currentUserContext";
import { showToast } from "lib/Toast";
import { userAccountApi } from "@ribon.io/shared";
import { useAuthentication } from "contexts/authenticationContext";
import ValidateAccount from "components/moleculars/validateAccount";

function ValidateAccountScreen() {
  usePageView("P28_view", { from: "validation_flow" });
  const { t } = useTranslation("translation", {
    keyPrefix: "auth.validateAccountScreen",
  });

  const { navigateTo } = useNavigation();
  const { currentUser } = useCurrentUser();
  const { sendAuthenticationEmail } = useAuthentication();

  const onContinue = async (pathname: string) => {
    await userAccountApi.postSendValidatedEmail();
    navigateTo(pathname);
  };

  const onContinueMagicLink = (pathname: string) => {
    sendAuthenticationEmail({ email: currentUser?.email });
    showToast({
      type: "success",
      message: t("toastSuccessMessage"),
    });
    navigateTo(pathname, { email: currentUser?.email });
  };

  return (
    <ValidateAccount
      title={t("title")}
      description={t("description", { email: currentUser?.email })}
      onContinue={() => onContinue("CausesScreen")}
      onContinueMagicLink={() =>
        onContinueMagicLink("SentMagicLinkEmailScreen")
      }
    />
  );
}

export default ValidateAccountScreen;