import { theme } from "@ribon.io/shared/styles";
import { IconRounded } from "components/atomics/Icon";
import React from "react";
import { View, Text } from "react-native";
import Toast from "react-native-toast-message";
import S from "./styles";

type NotificationProps = {
  message: string;
  type: "success" | "error" | "warning" | "info" | "custom";
  link?: string;
  linkMessage?: string;
  icon?: any;
  iconColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  closeButton?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  position?: "top" | "bottom";
};
const iconToast = (type?: string) => {
  switch (type) {
    case "success":
      return "check_circle";
    case "error":
      return "report";
    case "warning":
      return "warning";
    case "info":
      return "info";
    default:
      return "info";
  }
};

const iconColorToast = (type?: string) => {
  switch (type) {
    case "success":
      return theme.colors.feedback.success[200];
    case "error":
      return theme.colors.feedback.error[200];
    case "warning":
      return theme.colors.feedback.warning[600];
    case "info":
      return theme.colors.feedback.informational[300];
    default:
      return theme.colors.feedback.informational[300];
  }
};

const backgroundColorToast = (type: string) => {
  switch (type) {
    case "success":
      return theme.colors.brand.primary[600];
    case "error":
      return theme.colors.feedback.error[600];
    case "warning":
      return theme.colors.brand.quaternary[200];
    case "info":
      return theme.colors.feedback.informational[500];
    default:
      return theme.colors.feedback.informational[500];
  }
};

const textColorToast = (type: string) => {
  switch (type) {
    case "warning":
      return theme.colors.neutral[800];
    default:
      return theme.colors.neutral10;
  }
};
function CustomToast({
  type,
  message,
  backgroundColor,
  borderColor,
  textColor,
  icon,
  iconColor,
  linkMessage,
  link,
  closeButton,
}: NotificationProps) {
  return (
    <View
      style={[
        S.toastContainer,
        {
          backgroundColor: backgroundColor || backgroundColorToast(type),
          borderColor: borderColor || backgroundColorToast(type),
        },
      ]}
    >
      <IconRounded
        style={S.icon}
        name={icon || iconToast(type)}
        size={24}
        color={iconColor || iconColorToast(type)}
      />
      <View style={S.textContainer}>
        <Text style={[S.message, { color: textColor || textColorToast(type) }]}>
          {message}
        </Text>
        {link && <Text style={S.link}>{linkMessage}</Text>}
      </View>
      {closeButton && (
        <IconRounded
          name="close"
          style={S.closeIcon}
          size={24}
          color={textColor || textColorToast(type)}
          onPress={() => Toast.hide()}
        />
      )}
    </View>
  );
}
export const toastConfig = {
  success: ({ text1, props }: any) => (
    <CustomToast message={text1} {...props} />
  ),
  error: ({ text1, props }: any) => <CustomToast message={text1} {...props} />,
  warning: ({ text1, props }: any) => (
    <CustomToast message={text1} {...props} />
  ),
  info: ({ text1, props }: any) => <CustomToast message={text1} {...props} />,
  custom: ({ text1, props }: any) => <CustomToast message={text1} {...props} />,
};

export const showToast = ({
  type,
  message,
  position,
  icon,
  iconColor,
  backgroundColor,
  borderColor,
  textColor,
  link,
  linkMessage,
  closeButton = true,
}: NotificationProps) =>
  Toast.show({
    type: type || "info",
    text1: message,
    position,
    visibilityTime: 5000,
    autoHide: true,
    props: {
      icon,
      iconColor,
      backgroundColor,
      borderColor,
      textColor,
      link,
      linkMessage,
      type,
      position,
      closeButton,
    },
  });
