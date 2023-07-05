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
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/user-reducer";
import { useNavigate } from "react-router-dom";


import styles from "./Style";

const { width, height } = Dimensions.get("window");

export default function SignUp(props) {
  const { navigation } = props;
  let navigate;
  if (Platform.OS === "web") {
    navigate = useNavigate();
  }

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [UserNameError, setUserNameError] = useState("er");
  const [EmailError, setEmailError] = useState("er");
  const [PassError, setPassError] = useState("er");
  const [PhoneNumberError, setPhoneNumberError] = useState("er");

  const dispatch = useAppDispatch();
  const setUserDispatch = (data) => dispatch(setUser(data));

  const emailValid = (text1) => {
    isEmailValid(text1);
    if (EmailError == "valid") {
      setEmail(text1);
    }
  };

  const passwordValid = (text2) => {
    isPasswordValid(text2);
    if (PassError == "valid") {
      setPassword(text2);
    }
  };

  const userNameValid = (text3) => {
    isUserNameValid(text3);
    if (UserNameError == "valid") {
      setUserName(text3);
    }
  };

  const phoneNumberValid = (text4) => {
    isPhoneNumberValid(text4);
    if (PhoneNumberError === "valid") {
      setPhoneNumber(text4);
    }
  };

  const isUserNameValid = (userName) => {
    let Pattern = /^[a-zA-Z].{1,30}$/;
    Pattern.test(String(userName).toLowerCase())
      ? setUserNameError("valid")
      : setUserNameError("Invalid Username");
  };

  const isEmailValid = (email) => {
    let Pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Pattern.test(String(email).toLowerCase())
      ? setEmailError("valid")
      : setEmailError("Invalid Email Address");
  };

  const isPasswordValid = (password) => {
    let Pattern = /^[a-zA-Z].{1,30}$/;
    Pattern.test(String(password))
      ? setPassError("valid")
      : setPassError("Invalid Password Address");
  };

  const isPhoneNumberValid = (phonenumber) => {
    let Pattern = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    Pattern.test(+phonenumber)
      ? setPhoneNumberError("valid")
      : setPhoneNumberError("Invalid Phone Number");
  };

  const navigateSignIn = () => {
    if (Platform.OS === "web") {
      navigate("/home");
    } else navigation.navigate("SignIn");
  };

  const createuser = async() => {
    // const response2 = await fetch(URL);
    // const json = await response2.json();
    // console.log(json);

    alert("Signed up successfully!");

    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
  };

    const URL = `https://reactnativewebpoc-dda22-default-rtdb.firebaseio.com/${email.replaceAll(
      ".",
      ","
    )}.json`;
    const response = await fetch(URL, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        password: password,
        phone: phoneNumber,
      }),
    });
  };

  const signup = async () => {
    console.log("set email");
    let p1 = /^[a-zA-Z].{1,30}$/;
    let p2 =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let p3 = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    let p4 = /^[a-zA-Z].{1,30}$/;

    if (
      p1.test(userName) &&
      p2.test(email) &&
      p3.test(+phoneNumber) &&
      p4.test(password)
    ) {
      const details = {
        userName: userName,
        userEmailId: email,
        userPassword: password,
        userPhoneNumber: phoneNumber,
      };
      
      console.log(details);
      setUserDispatch(details);

      await createuser();
      navigateSignIn();
    } else {
      console.log(
        "invalid",
        UserNameError,
        EmailError,
        PassError,
        PhoneNumberError
      );

      alert("Invalid Details");
    }
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
        <Text style={styles.label}>Username: </Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(username) => setUserName(username)}
          // value="abc"
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.label}>Email: </Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(email) => setEmail(email)}
          // value="abc@gmail.com"
        />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.label}>Phone Number: </Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(phonenumber) => setPhoneNumber(phonenumber)}
          // value="9898989898"
        />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          // value="abc@123"
        />
      </View>

      <TouchableOpacity style={styles.signinBtn} onPress={() => signup()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.navigateText}>Already have an account?</Text>
      <Text style={styles.navigateLink} onPress={() => navigateSignIn()}>
        Sign In
      </Text>
    </View>
  );
}
