import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const Charts = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([0]);
  var name = "btc";
  let location;
  if (Platform.OS === "web") {
    location = useLocation();
    console.log("hahahahaha", location.state);
    name = location.state.name;
  }

  const getMovies = async () => {
    if (Platform.OS !== "web") {
      console.log("graphname", props);

      console.log("graphname", props.route.params);
      name = props.route.params.name;
    }
    try {
      const response = await fetch(
        `https://data.messari.io/api/v1/assets/${name}/metrics/price/time-series?start=2022-10-18&end=2022-10-25&interval=1d`
      );
      const json = await response.json();
      const datara = [];
      console.log("mahahahaha", json.data.values);
      json.data.values.forEach((day) => {
        datara.push(day[1]);
      });
      console.log("datara", datara);
      setChartData(datara);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  //  let a = data[1][1];
  //  let b = data[1][2];
  return (
    <View>
      <Text style={styles.Container}>Line Chart</Text>
      <Button
        onPress={() => {
          console.log(chartData[1].length);
        }}
        title="Learn More"
        color="#841584"
      />
      {/* <View>
              {console.log(chartData.length)}
            </View> */}
      {console.log("CHARTDATA", chartData)}
      <LineChart
        data={{
          labels: ["day 1", "day 2", "day 3", "day 4", "day 5", "day 6"],
          datasets: [
            {
              data: chartData,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={450}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //backgroundColor: "#e26a00",
          //backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(155, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(155, 255, 55, ${opacity})`,
          style: {
            borderRadius: 65,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "red",
          },
        }}
        bezier
        style={{
          marginVertical: 4,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  Container: {
    ...Platform.select({
      android: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginTop: 25,
        marginLeft: 140,
        fontSize: 25,
        color: "#121C84",
        fontWeight: "bold",
        marginBottom: 40,
      },
      default: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 2,
        marginBottom: 25,
        marginLeft: 500,
        fontSize: 30,
        color: "#121C84",
        fontWeight: "bold",
        marginBottom: 20,
      },
    }),
  },
});
