import { StyleSheet } from "react-native";
import { theme } from "@ribon.io/shared/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  title: {
    marginBottom: 20,
    color: theme.colors.gray40,
  },
  half: {
    display: "flex",
    flexDirection: "row",
  },
});

export default styles;
