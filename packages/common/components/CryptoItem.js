import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./Style";

export default function CryptoItem(props) {
  const cryptoData = props.cryptoData;
  const imgUrl =
    "https://messari.io/asset-images/" + cryptoData.id + "/128.png";
  let cryptoPrice = cryptoData.metrics.market_data.price_usd;
  cryptoPrice = cryptoPrice.toFixed(3);

  return (
    <View style={styles.cryptoContainer}>
      <View style={styles.cryptoIcon}>
        <Image
          style={styles.image}
          source={{
            uri: imgUrl,
          }}
        />
      </View>
      <View style={styles.cryptoDetails}>
        <Text style={styles.cryptoText}> {cryptoData.symbol}</Text>
        <Text style={styles.cryptoText}> {cryptoData.slug}</Text>
        <Text style={styles.cryptoPrice}> $ {cryptoPrice}</Text>
      </View>
    </View>
  );
}
