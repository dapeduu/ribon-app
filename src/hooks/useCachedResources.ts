import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as Sentry from "sentry-expo";
import { useEffect, useState } from "react";
import { initializeApi } from "services/api";
import { initializeApi as initializeAuthApi } from "services/authenticationApi";
import * as SplashScreen from "expo-splash-screen";
import MaterialSymbolsRounded from "assets/fonts/material/MaterialSymbolsRounded.ttf";
import MaterialSymbolsOutlined from "assets/fonts/material/MaterialSymbolsOutlined.ttf";
import MaterialSymbolsSharp from "assets/fonts/material/MaterialSymbolsSharp.ttf";
import { useCurrentUser } from "contexts/currentUserContext";
import { useLanguage } from "contexts/languageContext";
import { formattedLanguage } from "lib/formatters/languageFormatter";
import { perform } from "lib/timeoutHelpers";
import { logEvent } from "services/analytics";
import GambarinoRegular from "../assets/fonts/Gambarino-Regular.ttf";
import Inter400 from "../assets/fonts/inter/Inter-Regular.ttf";
import Inter900 from "../assets/fonts/inter/Inter-Black.ttf";
import Inter700 from "../assets/fonts/inter/Inter-Bold.ttf";
import Inter800 from "../assets/fonts/inter/Inter-ExtraBold.ttf";
import Inter200 from "../assets/fonts/inter/Inter-ExtraLight.ttf";
import Inter300 from "../assets/fonts/inter/Inter-Light.ttf";
import Inter500 from "../assets/fonts/inter/Inter-Medium.ttf";
import Inter600 from "../assets/fonts/inter/Inter-SemiBold.ttf";
import Inter100 from "../assets/fonts/inter/Inter-Thin.ttf";

SplashScreen.preventAutoHideAsync();
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const { currentUser } = useCurrentUser();
  const { currentLang } = useLanguage();

  useEffect(() => {
    initializeAuthApi({
      email: currentUser?.email || "",
      language: formattedLanguage(currentLang),
      platform: "app",
    });
    initializeApi({
      email: currentUser?.email,
      language: formattedLanguage(currentLang),
      platform: "app",
    });
  }, [JSON.stringify(currentUser), currentLang]);

  useEffect(() => {
    Sentry.init({
      dsn: "https://c39226956ee34786a8acdb34123f7d3b@o409844.ingest.sentry.io/4504565365473280",
      enableInExpoDevelopment: false,
      debug: true,
    });
  }, []);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "Gambarino-Regular": GambarinoRegular,
          Inter400,
          Inter900,
          Inter700,
          Inter800,
          Inter200,
          Inter300,
          Inter500,
          Inter600,
          Inter100,
          MaterialSymbolsRounded,
          MaterialSymbolsOutlined,
          MaterialSymbolsSharp,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // eslint-disable-next-line
        console.warn(e);
      } finally {
        logEvent("P1_view");
        setLoadingComplete(true);
        perform(SplashScreen.hideAsync).in(3000);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
