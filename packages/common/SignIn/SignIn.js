import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { stateLogin,setSession } from "../redux/user-reducer";
import styles from "./Style";
import { useNavigate } from "react-router-dom";

const { width, height } = Dimensions.get("window");

export default function SignIn(props) {
  const { navigation } = props;
  let navigate;
  if (Platform.OS === "web") {
    navigate = useNavigate();
  }

  const navigateSignUp = () => {
    if (Platform.OS === "web") {
      navigate("/signup");
    } else navigation.navigate("SignUp");
  };

  const [email2, setEmail] = useState("");
  const [password2, setPassword] = useState("");
  const [Emailerror, setEmailError] = useState("error");
  const [Passerror, setPassError] = useState("error");

  const userdetails = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const loginDispatch = () => dispatch(stateLogin());
  const sessionDispatch = (data) => dispatch(setSession(data));

 
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

  const URL = `https://reactnativewebpoc-dda22-default-rtdb.firebaseio.com/${email2.replaceAll(
    ".",
    ","
  )}.json`;

  const testdb = async () => {
    const response = await fetch(URL);
    const json = await response.json();

    if (!json) alert("user does not exist");
    else {
      const { email, password } = json;
      if (password === password2) {
        sessionDispatch(email2);
        loginDispatch();
      } else {
        alert("incorrect password!");
      }
    }
    // if password===password2

    // alert(JSON.stringify(json));

    // alert(password);
  };
  const login = async () => {
    console.log("set email");
    if (Emailerror === "" && Passerror === "") {
      console.log(userdetails, email2, password2);
      // testdb().then();
      const fetchPromise = fetch(URL);
      if (true) {
        await testdb();
      } else {
        console.log("invalid");
        alert("Invalid email or password");
      }
    } else {
      console.log("invalid", Emailerror, Passerror);
      alert("Invalid email or password");
    }
  };


  const emailValid = (text1) => {
    isEmailValid(text1);
    if (Emailerror == "") {
      setEmail(text1);
    }
  };

  const passwordValid = (text2) => {
    isPasswordValid(text2);
    if (Passerror == "") {
      setPassword(text2);
    }
  };

  const isEmailValid = (email) => {
    let Pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Pattern.test(String(email).toLowerCase())
      ? setEmailError("")
      : setEmailError("Invalid Email Address");
  };

  const isPasswordValid = (password) => {
    let Pattern = /^[a-zA-Z].{1,30}$/;
    Pattern.test(String(password).toLowerCase())
      ? setPassError("")
      : setPassError("Invalid Password Address");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/9/97/Cryptocurrency_Gold.png",
        }}
      />

      <View style={styles.inputView}>
        <View style={{ alignItems: "center" }}></View>
        <Text style={styles.label}>Email: </Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(email) => emailValid(email)}
        />
      </View>

      <View style={styles.inputView}>
        <View style={{ alignItems: "center" }}></View>
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={(password) => passwordValid(password)}
        />
      </View>

      <TouchableOpacity style={styles.signinBtn} onPress={() => login()}>
        <Text style={styles.buttonText}>LOGIN </Text>
      </TouchableOpacity>

      {Platform.OS === "web" ? (
        <>
          <Text
            style={styles.forgotPassword}
            onPress={() => navigate("/forgotpassword")}
          >
            Forgot Password?{" "}
          </Text>
        </>
      ) : (
        <>
          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgot Password?{" "}
          </Text>
        </>
      )}

      <Text style={styles.navigateText}>Don't have an account? </Text>
      <Text style={styles.navigateLink} onPress={() => navigateSignUp()}>
        Sign Up
      </Text>
    </View>
  );
}
