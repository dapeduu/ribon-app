import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { theme } from "@ribon.io/shared/styles";
import { defaultBodyMdSemibold } from "styles/typography/defaultStyledComponents"; // Assuming you have a styled version for these typography styles
import { stylizedDisplayXs } from "styles/typography/stylized";

export const Title = styled.Text`
  ${stylizedDisplayXs}
  color: ${theme.colors.brand.primary[900]};
`;

export const Container = styled.View`
  padding: 16px;
  margin-top: 36px;
  height: 100%;
  padding-right: 12px;
`;

export const MainContainer = styled.View`
  width: 100%;
`;

export const KeyboardView = styled.View`
  height: ${Platform.OS === "android"
    ? Dimensions.get("window").height
    : "100%"};
`;

export const ImageContainer = styled.View`
  margin-top: ${theme.spacing(24)};
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  margin-top: ${theme.spacing(24)};
  align-items: center;
  gap: ${theme.spacing(8)};
`;

export const Subtitle = styled.Text`
  ${defaultBodyMdSemibold}
  height: 48px;
  text-align: center;
  color: ${theme.colors.neutral[600]};
  margin-bottom: ${theme.spacing(4)};
`;

export const Image = styled.Image`
  width: 132px;
  height: 132px;
  resize-mode: cover;
  border-radius: ${theme.spacing(8)};
`;
