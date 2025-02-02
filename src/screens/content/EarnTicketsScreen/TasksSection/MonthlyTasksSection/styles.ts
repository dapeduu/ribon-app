import { StyleSheet } from "react-native";
import { theme } from "@ribon.io/shared/styles";
import { defaultBodyLgBold } from "styles/typography/default";

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacingNative(16),
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacingNative(16),
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    ...defaultBodyLgBold,
    color: theme.colors.brand.primary[900],
    marginLeft: theme.spacingNative(4),
  },
});

export default styles;
