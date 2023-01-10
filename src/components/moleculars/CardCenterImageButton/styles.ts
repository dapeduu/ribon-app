import { StyleSheet } from "react-native";
import { theme } from "@ribon.io/shared/styles";

const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(40, 36, 28, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    margin: 8,
  },
  containerImage: {
    position: "relative",
  },
  darkStroke: {
    height: 100,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  cardWrapper: {
    display: "flex",
    backgroundColor: theme.colors.neutral10,
    flexDirection: "column",
    borderRadius: 12,
    height: "auto",
    width: "100%",
  },
  cardImage: {
    width: "100%",
    aspectRatio: 1.1,
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 16,
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
  },
  bullet: {
    marginLeft: 4,
    marginRight: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: theme.colors.gray40,
  },
  info: {
    textAlign: "center",
    color: theme.colors.gray40,
  },
  icon: {
    marginTop: 2,
    marginLeft: 4,
  },
  imageDescription: {
    padding: 14,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
    color: theme.colors.neutral10,
    fontWeight: "600",
    fontSize: 16,
  },
  containerText: {
    padding: "8px 12px 12px 12px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

export default styles;