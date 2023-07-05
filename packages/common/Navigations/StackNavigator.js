import React from "react";
import { useAppSelector } from "../redux/hooks";
import { TouchableOpacity, Image, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../SignIn/SignIn";
import Main from "../Main/Main";
import SignUp from "../SignUp/SignUp";
import Profile from "../Profile/Profile";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import CryptoDetails from "../CryptoDetails/CryptoDetails";
import UpdatePassword from "../UpdatePassword/UpdatePassword"
import Charts from "../Charts/Charts";

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: true,
          headerTintColor: "#ffd74c",
          headerStyle: {
            backgroundColor: "#513252",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = () => {
  const userData = useAppSelector((state) => state.user);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Main}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: (props) => null,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              title="profile"
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 63,
                  borderWidth: 1,
                  borderColor: "white",
                  marginVertical: 10,
                  marginRight: 10,
                }}
                // source={{
                //   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFD6XbB_OrCN_rraoT5vZxGZ8LSSDPt2wiMxWyHs&s",
                // }}
                source={userData.userProfile}
              />
            </TouchableOpacity>
          ),
          headerTintColor: "#ffd74c",
          headerStyle: {
            backgroundColor: "#513252",
          },
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTintColor: "#ffd74c",
          headerStyle: {
            backgroundColor: "#513252",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={{
          headerShown: true,
          headerTintColor: "#ffd74c",
          headerStyle: {
            backgroundColor: "#513252",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="CryptoDetails"
        component={CryptoDetails}
        options={{
          headerShown: true,
          headerTintColor: "#ffd74c",
          headerStyle: {
            backgroundColor: "#513252",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Charts"
        component={Charts}
        options={{
          headerShown: true,
          headerTintColor: "#ffd74c",
          headerStyle: {
            backgroundColor: "#513252",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export { LoginStackNavigator, HomeStackNavigator };
