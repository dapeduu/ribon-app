import Button from "components/atomics/buttons/Button";
import { useNavigation } from "hooks/useNavigation";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Image from "components/atomics/Image";
import { theme, useArticles } from "@ribon.io/shared";
import ImageWithInfoLayout from "components/moleculars/layouts/ImageWithInfoLayout";
import { useTranslation } from "react-i18next";
import NewsPlaceholder from "./placeholder";
import { useUnsafeAreaContext } from "contexts/unsafeAreaContext";
import { defaultBodyMdSemibold } from "styles/typography/default";
import S from "./styles";

export default function AvailableArticleScreen() {
  const { navigateTo } = useNavigation();
  const { getArticles } = useArticles();
  const [article, setArticle] = React.useState<any>();
  const { setBottomBackgroundColor } = useUnsafeAreaContext();

  const { t } = useTranslation("translation", {
    keyPrefix: "content.availableArticleScreen",
  });

  const { primary } = theme.colors.brand;

  useEffect(() => {
    const fetchArticles = async () => {
      const article = await getArticles();
      setArticle(article[0]);
    };

    fetchArticles();
  }, []);

  const navigateToCausesScreen = () => {
    navigateTo("CausesScreen");
  };

  const navigateToForYouScreen = () => {
    navigateTo("ForYouScreen");
  };

  useEffect(() => {
    setBottomBackgroundColor(primary[50]);

    return () => {
      setBottomBackgroundColor("white");
    };
  }, []);

  return (
    <View style={S.container}>
      <View style={S.topRow}>
        <ImageWithInfoLayout
          title={t("title") || ""}
          description={t("subtitle") || ""}
        />
      </View>

      <View style={S.bottomRow}>
        {!article ? (
          <NewsPlaceholder />
        ) : (
          <View style={S.articleContainer}>
            <View style={S.imageContainer}>
              <Image
                style={S.articleImage}
                source={{ uri: article.imageUrl }}
              />
            </View>
            <View style={S.articleContent}>
              <Text style={S.textSecondary}>{article.publishedAtInWords}</Text>
              <Text style={S.textPrimary}>{article.author.name}</Text>
              <Text style={S.textMedium} ellipsizeMode="tail" numberOfLines={3}>
                {article.title}
              </Text>
            </View>
          </View>
        )}
        <Button
          text={t("seeAllPosts")}
          customStyles={S.buttonPrimary}
          customTextStyles={{
            color: theme.colors.neutral10,
            ...defaultBodyMdSemibold,
          }}
          onPress={navigateToForYouScreen}
          backgroundColor={primary[100]}
        />
        <Button
          customStyles={S.buttonSecondary}
          customTextStyles={{
            color: primary[600],
            ...defaultBodyMdSemibold,
          }}
          text={t("continue")}
          onPress={navigateToCausesScreen}
          outline
        />
      </View>
    </View>
  );
}
