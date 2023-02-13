import { Dimensions, StyleSheet } from "react-native";
import {
  defaultBodySmSemibold,
  defaultBodyXsRegular,
} from "styles/typography/default";
import { theme } from "@ribon.io/shared/styles";
import {
  stylizedDisplaySm,
  stylizedDisplayXs,
} from "styles/typography/stylized";

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    paddingBottom: 50,
    paddingHorizontal: 16,
  },
  ContentContainer: {
    width: "100%",
    marginTop: 16,
    borderRadius: 8,
  },
  DonateContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: theme.colors.gray30,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.32,
    shadowRadius: -2,
    elevation: 2,
  },
  GivingContainer: {
    marginBottom: 24,
    paddingHorizontal: 34,
  },
  ContributionContainer: {
    maxWidth: "100%",
    marginBottom: 34,
    paddingHorizontal: 18,
  },
  CommunityAddText: {
    ...defaultBodyXsRegular,
    color: theme.colors.gray30,
  },
  CommunityAddValue: {
    ...stylizedDisplayXs,
    color: theme.colors.red20,
  },
  CommunityAddButton: {
    marginTop: 8,
    padding: 4,
    borderColor: theme.colors.red40,
    fontSize: 11,
    color: theme.colors.red40,
  },
  DonateButton: {
    borderColor: theme.colors.red20,
    fontWeight: "600",
    backgroundColor: theme.colors.red20,
    color: theme.colors.red40,
  },
  BackgroundImage: {
    display: "none",
    position: "absolute",
    right: 0,
    bottom: -200,
  },
  Title: {
    ...stylizedDisplaySm,
    marginRight: "5%",
    marginBottom: 16,
    color: theme.colors.gray40,
  },
  SupportImage: {
    width: "100%",
    height: 136,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    objectFit: "cover",
    backgroundColor: theme.colors.gray10,
  },
  UserBalanceText: {
    ...defaultBodySmSemibold,
    marginBottom: 4,
    textAlign: "center",
    color: theme.colors.gray30,
  },
  UserBalanceTextHighlight: {
    ...defaultBodySmSemibold,
    color: theme.colors.red30,
  },
  RefundText: {
    ...defaultBodyXsRegular,
    marginTop: 4,
    textAlign: "center",
    color: theme.colors.gray30,
  },
  TitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  TooltipSection: {
    marginBottom: 30,
    display: "flex",
    justifyContent: "center",
  },
  scrollContainer: {},
  cardWaveContainer: {
    marginRight: 8,
    width: Dimensions.get("window").width - 64,
  },
});

export default styles;