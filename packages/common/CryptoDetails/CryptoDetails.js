import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import { List } from "react-native-paper";
import { useNavigate } from "react-router-dom";
import styles from "./Style";
import Charts from "../Charts/Charts";
import { useLocation } from "react-router-dom";
export default function App(props) {
  const [expanded, setExpanded] = React.useState(true);

  const { navigation } = props;
  var name = "btc";
  var price = 0;
  if (Platform.OS === "web") {
    const location = useLocation();
    console.log("hahahahaha", location.state);
    name = location.state.item;
    price = location.state.price;
  } else {
    console.log("graphname", props);

    console.log("graphname", props.route.params);
    name = props.route.params.item;
    price = props.route.params.price;
  }

  const handlePress = () => setExpanded(!expanded);

  let navigate;
  if (Platform.OS === "web") {
    navigate = useNavigate();
  }

  const navigateToProfile = () => {
    if (Platform.OS === "web") {
      navigate("/profile");
    } else navigation.navigate("Profile");
  };

  const navigateToHome = () => {
    if (Platform.OS === "web") {
      navigate("/");
    } else navigation.navigate("Main");
  };

  const navigateToCharts = () => {
    if (Platform.OS === "web") {
      navigate("/charts", { state: { name: name } });
    } else navigation.navigate("Charts", { name: name });
  };
  return (
    <>
      {Platform.OS === "web" && (
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
      )}

      <View>
        <Text style={styles.Section}>Accordions</Text>
        <View style={{ backgroundColor: "#99F5E0" }}>
          <List.Accordion
            title=" What is Crypto..?"
            left={(props) => <List.Icon icon="folder" />}
          >
            <View>
              <Text style={styles.DescriptionHead}>Description</Text>
            </View>
            <View>
              <Text style={styles.DescriptionContent}>
                A cryptocurrency is an encrypted data string that denotes a unit
                of currency. It is monitored and organized by a peer-to-peer
                network called a blockchain, which also serves as a secure
                ledger of transactions, e.g., buying, selling, and transferring.
              </Text>
            </View>
          </List.Accordion>
        </View>
        <View style={{ backgroundColor: "#F7B5B6" }}>
          <List.Accordion
            title="Crypto Data"
            left={(props) => <List.Icon icon="folder" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <View>
              <Text style={styles.Name}>Name : {name}</Text>
            </View>
            <View>
              <Text style={styles.Price}>Price : {price} </Text>
            </View>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => navigateToCharts()}
            >
              <Text style={styles.Charts}>CHARTS</Text>
            </TouchableOpacity>
          </List.Accordion>
        </View>
        {/* </List.Section> */}
      </View>
    </>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import * as React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   Platform,
// } from "react-native";
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";

// const Charts = () => {
//   return(
//     <View>
//       <Text>Bezier Line Chart</Text>
//           <LineChart
//             data={{
//               labels: ["Bitcoin", "Ethereum", "Tether", "USD-coin", "xrp", "Solana","Cardano","Uniswap"],
//               datasets: [
//                 {
//                   data: [
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                     Math.random() * 100,
//                   ]
//                 }
//               ]
//             }}
//             width={Dimensions.get("window").width} // from react-native
//             height={450}
//             yAxisLabel="$"
//             yAxisSuffix="k"
//            yAxisInterval={1} // optional, defaults to 1
//             chartConfig={{
//               //backgroundColor: "#e26a00",
//              //backgroundGradientFrom: "#fb8c00",
//               backgroundGradientTo: "#ffa726",
//               decimalPlaces: 2, // optional, defaults to 2dp
//               color: (opacity = 1) => `rgba(155, 255, 255, ${opacity})`,
//               labelColor: (opacity = 1) => `rgba(55, 255, 55, ${opacity})`,
//               style: {
//                 borderRadius: 25
//               },
//               propsForDots: {
//                 r: "3",
//                 strokeWidth: "5",
//                 stroke: "red"
//               }
//             }}
//             bezier
//             style={{
//               marginVertical: 10,
//               borderRadius: 10
//             }}
//           />
//     </View>
//   )
// }

// export default Charts;
