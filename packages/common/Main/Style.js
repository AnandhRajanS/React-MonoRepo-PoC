import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 8,
    paddingRight: 4,
    paddingVertical: 24,
  },
  flatlist: {
    width: "100%",
    paddingLeft: 16,
    backgroundColor: "white",
  },
  flatlistItemSeparator: {
    backgroundColor: "white",
    height: 16,
  },
  profileButton: {
    ...Platform.select({
      android: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f2bb07",
      },
      default: {
        width: "10%",
        height: 25,
        borderRadius: 80,
        marginBottom: 25,
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "black",
      },
    }),
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  navbar: {
    backgroundColor: "#513252",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
  navbarImage: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
  navbarIcon: {
    paddingRight: 16,
  },
  navbarText: {
    fontWeight: "bold",
    color: "#f2bb07",
    padding: 16,
  },
  navbarTab: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  navbarSelectedTab: {
    fontWeight: "bold",
    color: "#ffd954",
    padding: 16,
  },
});

export default styles;
