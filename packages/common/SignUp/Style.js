import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "#fff",
      },
      android: {
        padding: 8,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      default: {
        // other platforms, web for example
        padding: 8,
        paddingBottom: 24,
        backgroundColor: "white",
        justifyConetnt: "center",
        alignItems: "center",
      },
    }),
  },
  inputView: {
    ...Platform.select({
      android: {
        //   backgroundColor: "#eb8144",

        borderRadius: 50,
        width: "80%",
        height: 35,
        marginBottom: 48,
        alignItems: "flex-start",
        justifyContent: "center",
      },
      default: {
        //   backgroundColor: "#eb8144",
        height: 60,
        width: "40%",
        marginBottom: 16,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      },
    }),
  },
  TextInput: {
    ...Platform.select({
      android: {
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        border: 3,
        backgroundColor: "#f2bb07",
        borderRadius: 10,
        padding: 10,
      },
      default: {
        height: "70%",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        border: 3,
        backgroundColor: "#f2bb07",
        borderRadius: 10,
        padding: 10,
      },
    }),
  },
  image: {
    ...Platform.select({
      android: {
        resizeMode: "contain",
        height: 130,
        width: 130,
        marginBottom: 36,
      },
      default: {
        resizeMode: "contain",
        height: 150,
        width: 150,
      },
    }),
  },

  signinBtn: {
    ...Platform.select({
      android: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 24,
        backgroundColor: "#6f9c27",
      },
      default: {
        width: "40%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 24,
        backgroundColor: "#6f9c27",
      },
    }),
  },
  navigate: {
    ...Platform.select({
      android: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      default: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
    }),
  },
  navigateLink: {
    ...Platform.select({
      android: {
        color: "#0070ad",
        alignItems: "center",
      },
      default: {
        color: "#0070ad",
        alignItems: "center",
      },
    }),
  },
  navigateText: {
    ...Platform.select({
      android: {
        color: "#28282b",
        alignItems: "center",
      },
      default: {
        color: "#28282b",
        alignItems: "center",
      },
    }),
  },
  label: {
    ...Platform.select({
      android: {
        color: "#28282b",
        padding: 2,
        alignSelf: "flex-start",
      },
      default: {
        color: "#28282b",
        padding: 2,
        fontSize: 16,
        alignSelf: "flex-start",
        textAlignments: "right",
      },
    }),
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
