import { StyleSheet } from "react-native";
import { theme } from "@ribon.io/shared";
import { stylizedDisplayMd } from "styles/typography/stylized";

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  icon: {
    position: "absolute",
    top: -40,
    borderRadius: 50,
    backgroundColor: "transparent",
  },
  title: {
    ...stylizedDisplayMd,
    marginBottom: 8,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 36,
  },
  description: {
    fontSize: 14,
    lineHeight: 28,
    marginBottom: 20,
  },
});

export default styles;
