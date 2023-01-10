import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/config/navigation";
import { useEffect } from "react";
import { registerForPushNotificationsAsync } from "./src/services/notifications";
import { QueryClientComponent } from "@ribon.io/shared/hooks";
import { useFonts } from "expo-font";
import "./i18n.config";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    "Gambarino-Regular": require("./src/assets/fonts/Gambarino-Regular.ttf"),
  });

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => console.log(token));
  }, []);

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <QueryClientComponent>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </QueryClientComponent>
    );
  }
}
