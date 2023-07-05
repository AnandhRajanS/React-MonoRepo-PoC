import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import CarouselCards from "../components/Carousel/CarouselCards/CarouselCards";
import {
  View,
  FlatList,
  Platform,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "./Style";
//import CryptoItem from "../components/CryptoItem";
import { MainApi } from "../apiCalls/MainApi";
import { useNavigate } from "react-router-dom";
import FlatSearch1 from "../components/FlatSearch1/FlatSearch1";

export default function CryptoList(props) {
  const { navigation } = props;
  const userData = useAppSelector((state) => state.user);
  let navigate;
  if (Platform.OS === "web") {
    navigate = useNavigate();
  }
  // const [cryptoData, setCryptoData] = useState([]);
  // useEffect(() => {
  //   let apiCall = new MainApi().getCryptoAPi();

  //   apiCall.then((response) => {
  //     setCryptoData(response.data);
  //     console.log("aaaadsdsd", response.data);
  //   });
  // }, []);

  const navigateToProfile = () => {
    if (Platform.OS === "web") {
      navigate("/profile");
    } else navigation.navigate("Profile");
  };

  const navigateToCryptoDetails = (slug, price) => {
    console.log("xnananananana", slug, price, "xxx");
    if (Platform.OS === "web") {
      navigate("/cryptoDetails", {
        state: {
          item: slug,
          price: price.price_usd,
        },
      });
    } else
      navigation.navigate("CryptoDetails", {
        item: slug,
        price: price.price_usd,
      });
  };

  const navigateToHome = () => {
    if (Platform.OS === "web") {
      navigate("/");
    } else navigation.navigate("Main");
  };
  const width = Dimensions.get("window").width;

  return (
    <>
      {Platform.OS === "web" && (
        <View style={styles.fix}>
          <View style={styles.navbar}>
            <TouchableOpacity
              style={styles.navbarIcon}
              onPress={() => navigateToHome()}
            >
              <Image
                style={styles.navbarImage}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/9/97/Cryptocurrency_Gold.png",
                }}
              />
            </TouchableOpacity>
            <View style={styles.navbarTab}>
              <Text
                onPress={() => navigateToHome()}
                style={
                  window.location.pathname === "/home"
                    ? styles.navbarSelectedTab
                    : styles.navbarText
                }
              >
                HOME
              </Text>
              <Text
                onPress={() => navigateToProfile()}
                style={
                  window.location.pathname === "/profile"
                    ? styles.navbarSelectedTab
                    : styles.navbarText
                }
              >
                PROFILE
              </Text>
            </View>
          </View>
        </View>
      )}

      <ScrollView>
        <View style={styles.flatlist}>
          <CarouselCards />
        </View>
        <View>
          <FlatSearch1 navigateToCryptoDetails={navigateToCryptoDetails} />
        </View>
      </ScrollView>
    </>
  );
}
