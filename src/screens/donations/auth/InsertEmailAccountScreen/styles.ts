import { Dimensions, Platform, StyleSheet } from "react-native";
import { stylizedDisplayXs } from "styles/typography/stylized";
import { theme } from "@ribon.io/shared/styles";
import {
  defaultBodyMdRegular,
  defaultBodyMdSemibold,
} from "styles/typography/default";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacingNative(16),
    paddingVertical: theme.spacingNative(48),
  },
  imageContainer: {
    marginTop: theme.spacingNative(24),
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    marginTop: theme.spacingNative(24),
    alignItems: "center",
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mainImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    ...stylizedDisplayXs,
    color: theme.colors.brand.primary[900],
    marginBottom: theme.spacingNative(8),
  },
  description: {
    ...defaultBodyMdSemibold,
    color: theme.colors.neutral[500],
    marginBottom: theme.spacingNative(24),
    textAlign: "center",
  },
  button: {
    height: 48,
    backgroundColor: theme.colors.brand.primary[600],
    borderColor: theme.colors.brand.primary[800],
  },
  inputContainer: {
    height: 48,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    ...defaultBodyMdRegular,
    height: "100%",
    lineHeight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  keyboardView: {
    height:
      Platform.OS === "android" ? Dimensions.get("window").height : "100%",
  },
});

export default styles;
