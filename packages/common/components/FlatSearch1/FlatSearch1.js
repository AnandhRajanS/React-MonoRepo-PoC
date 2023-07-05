import React, { useState } from "react";

import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import filter from "lodash.filter";
import {
  ApplicationProvider,
  Text,
  Avatar,
  Input,
} from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { connect } from "react-redux";
import * as quoteActions from "../../app/actions/quoteActions";
// import * as quoteActions from "../app/actions/quoteActions";
import { useSelector } from "react-redux";

const HomeScreen = (props) => {
  const cryptoData = useSelector((cryptoData) => cryptoData.quote);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);
  let quoterr = useSelector((state) => state.quote.quote.data);
  React.useEffect(() => {
    //console.log('test');
    props.props.loadQuote();
    setIsLoading(true);
    if (cryptoData.error == null) {
      setData(quoterr);
      setFullData(quoterr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setError(cryptoData.error);
    }
  }, []);

  const contains = ({ slug, symbol }, query) => {
    if (slug.includes(query) || symbol.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(quoterr, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "5%",
        }}
      />
    );
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error != null) {
    console.log("Error method : " + JSON.stringify(error));
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 20,
        marginTop: -25,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Search"
          style={{
            borderRadius: 25,
            borderColor: "#333",
            backgroundColor: "#fff",
            color: "#000",
          }}
        />
      </View>
      {console.log('data',data)}
      <FlatList
        data={data?data:quoterr}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              {
                console.log("anandhslug", item.metrics.market_data);
              }
              props.props.navigateToCryptoDetails(
                item.slug,
                item.metrics.market_data
              );
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 16,
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Avatar
                source={{
                  uri:
                    "https://messari.io/asset-images/" + item.id + "/128.png",
                }}
                size="giant"
                style={{ marginRight: 16 }}
              />
              <Text
                category="s1"
                style={{
                  color: "#000",
                }}
              >{`${item.slug}
${item.symbol} `}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const FlatSearch1 = (props) => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <HomeScreen props={props} />
  </ApplicationProvider>
);

function mapStateToProps(state) {
  return {
    quote: state.quote,
    isLoading: state.isLoading,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadQuote: () => dispatch(quoteActions.loadQuote()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatSearch1);
