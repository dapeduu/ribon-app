import { StyleSheet } from "react-native";
import { stylizedHeadingMedium } from "styles/typography/stylized";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 4,
    marginBottom: 16,
  },
  text: {
    ...stylizedHeadingMedium,
    marginBottom: 24,
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 36,
  },
  imageContainer: {
    display: "flex",
    width: "90%",
    height: 160,
    resizeMode: "cover",
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "rgba(40, 36, 28, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.8,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
});

export default styles;