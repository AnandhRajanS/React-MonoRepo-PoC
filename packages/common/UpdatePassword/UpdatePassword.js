import React, { useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setForgotPassword } from "../redux/user-reducer";
import { useNavigate } from "react-router-dom";

const UpdatePassword = (props) => {
//   const { navigation } = props;

//   const navigateProfile = () => {
//     if (Platform.OS === "web") {
//       let navigate = useNavigate();
//       navigate("/profile");
//     } else navigation.navigate("Profile");
//   };

  
//   const dispatch = useAppDispatch();
//   const forgotPasswordDispatch = (data) => dispatch(setForgotPassword(data));
//   const userEmailId = useAppSelector((state) => state.user.userEmailId);

  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("error");
  const [newPassword, setNewPassword] = useState("");

  const confirm = () => {
    if (current !== password) {
      if (password === newPassword) {
        // forgotPasswordDispatch(password);
        alert("Password changed sucessfully");
        // navigateProfile();
      } else {
        alert("Password doesn't match");
      }
    } else {
      alert("This password is already given");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>UPDATE PASSWORD</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.title}
          placeholder="Current Password"
          onChangeText={(current) => setCurrent(current)}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          style={styles.title}
          secureTextEntry={true}
          placeholder="NewPassword"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.title}
          secureTextEntry={true}
          placeholder="Confirm New password"
          onChangeText={(newPassword) => setNewPassword(newPassword)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => confirm()}>
        <Text style={styles.text1}>CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        width: "70%",
        height: 25,
        paddingLeft: 10,
      },
      default: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: 25,
        marginLeft: 300,
        marginTop: 100,
        marginBottom: 100,
        borderWidth: 2,
      },
    }),
  },
  title: {
    ...Platform.select({
      android: {
        width: "100%",
        height: "100%",
        marginTop: 1,
        marginBottom: 50,
        paddingVertical: 8,
        borderWidth: 4,
        borderRadius: 20,
        textAlign: "center",
        fontSize: 20,
      },
      default: {
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 8,
        borderWidth: 3,
        borderRadius: 16,
        textAlign: "center",
        fontSize: 15,
      },
    }),
  },
  text: {
    ...Platform.select({
      android: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        width: "100%",
        height: 100,
        marginLeft: 60,
        marginTop: 30,
        marginLeft: 70,
      },
      default: {
        margin: 35,
        fontSize: 34,
        marginLeft: 100,
        fontWeight: "bold",
      },
    }),
  },
  text1: {
    justifyContent: "center",
    color: "white",
  },

  input: {
    ...Platform.select({
      android: {
        color: "black",
        marginLeft: 50,
        width: "100%",
        height: 50,
        marginBottom: 20,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      default: {
        color: "black",
        marginLeft: 50,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
      },
    }),
  },
  button: {
    ...Platform.select({
      android: {
        backgroundColor: "black",
        borderWidth: 3,
        width: "50%",
        height: 50,
        marginLeft: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginTop: 2,
        marginLeft: 120,
      },
      default: {
        backgroundColor: "black",
        borderWidth: 5,
        width: "28%",
        height: 50,
        marginLeft: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 2,
        marginBottom: 25,
      },
    }),
  },
  image: {
    height: 200,
    width: "100%",
    marginTop: 45,
    marginLeft: 50,
  },
});
