import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  cryptoContainer: {
    ...Platform.select({
      android: {
        width: "96%",
        flexDirection: "row",
        borderRadius: 16,
        padding: 8,
        borderWidth: 1.5,
        borderColor: "black",
      },
      default: {
        width: 300,
        height: 200,
        alignSelf: "center",
        marginRight: 100,
        marginHorizontal: "2.5%",
        marginVertical: "2%",
        padding: 10,
        borderWidth: 2,
        borderColor: "black",
      },
    }),
  },

  cryptoText: {
    fontSize: 18,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
  },
  cryptoPrice: {
    fontSize: 16,
    color: "red",
    alignSelf: "center",
    borderColor: "#003F7D",
  },
  cryptoDetails: {
    flex: 0.95,
    justifyContent: "center",
  },
  cryptoIcon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    flex: 1,
    width: "50%",
    justifyContent: "center",
    resizeMode: "contain",
  },
});

export default styles;
