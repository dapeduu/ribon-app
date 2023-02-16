import { useEffect, useState } from "react";
import InputRange from "components/atomics/inputs/InputRange";
import { useOffers } from "@ribon.io/shared/hooks";
import { useCardPaymentInformation } from "contexts/cardPaymentInformationContext";
import { Cause, Currencies, Offer } from "@ribon.io/shared/types";
import { useTranslation } from "react-i18next";
import { theme } from "@ribon.io/shared/styles";
import { formatPrice } from "lib/formatters/currencyFormatter";
import { getLocalStorageItem, setLocalStorageItem } from "lib/localStorage";
import { Text, View } from "react-native";
import Dropdown from "components/moleculars/Dropdown";
import { useCryptoPayment } from "contexts/cryptoPaymentContext";
import styles from "./styles";

const { brand.secondary[700] } = theme.colors;
const { neutral } = theme.colors;

type Props = {
  cause: Cause | undefined;
  onOfferChange: (offer: Offer) => void;
};

const CURRENT_OFFER_INDEX_KEY = "CURRENT_OFFER_INDEX_KEY";

function SelectOfferPage({ cause, onOfferChange }: Props): JSX.Element {
  const [maxRange, setMaxRange] = useState(0);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const { setIsInCryptoPage } = useCryptoPayment();

  const defaultCurrentOfferIndex = async () => {
    const localstorageIndex = await getLocalStorageItem(
      CURRENT_OFFER_INDEX_KEY,
    );
    if (localstorageIndex) return Number(localstorageIndex);

    return 0;
  };

  useEffect(() => {
    defaultCurrentOfferIndex().then((index) => setCurrentOfferIndex(index));
  }, []);

  const [currentOffer, setCurrentOffer] = useState<Offer>();
  const { currentCoin, setCurrentCoin, loading } = useCardPaymentInformation();
  const { offers } = useOffers(currentCoin || Currencies.USD, false);
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportCauseScreen.selectOfferSection",
  });

  useEffect(() => {
    if (offers.length > 0) setMaxRange(offers.length - 1);
    setCurrentOffer(offers[currentOfferIndex]);
  }, [offers]);

  useEffect(() => {
    if (currentOffer) onOfferChange(currentOffer);
  }, [currentOffer]);

  useEffect(() => {
    setCurrentOffer(offers[currentOfferIndex]);
    setLocalStorageItem(CURRENT_OFFER_INDEX_KEY, currentOfferIndex.toString());
  }, [currentOfferIndex]);

  const onCurrencyChanged = (currency: Currencies | "USDC") => {
    if (currency === "USDC") {
      setIsInCryptoPage(true);
    } else {
      setCurrentCoin(currency);
      setCurrentOfferIndex(0);
    }
  };

  if (loading) return <View />;

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text style={styles.title}>
        {t("causeText")} {cause?.name}
      </Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.valueText}>
          {currentOffer &&
            formatPrice(currentOffer.priceValue, currentOffer.currency)}
        </Text>
        <Dropdown
          items={[
            { label: Currencies.BRL, value: Currencies.BRL },
            { label: Currencies.USD, value: Currencies.USD },
            { label: "USDC", value: "USDC" },
          ]}
          onSelect={({ value }) => {
            onCurrencyChanged(value as Currencies | "USDC");
          }}
          label={currentCoin || Currencies.USD}
          containerStyle={styles.dropdownContainerStyles}
        />
      </View>
      <InputRange
        value={currentOfferIndex}
        min={0}
        max={maxRange}
        onChange={(value) => {
          const changeValue = Array.isArray(value) ? value[0] : value;
          setCurrentOfferIndex(changeValue);
        }}
        color={brand.secondary[700]}
        minimumTrackTintColor={brand.secondary[700]}
        maximumTrackTintColor={neutral[200]}
        sliderStyle={styles.sliderStyle}
      />
    </View>
  );
}

export default SelectOfferPage;
