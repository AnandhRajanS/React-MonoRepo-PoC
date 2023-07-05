import 'react-native-gesture-handler';
import React from 'react';
import { Platform, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "./packages/common/redux/hooks";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./packages/common/redux/store";
import {
  LoginStackNavigator,
  HomeStackNavigator,
} from "./packages/common/Navigations/StackNavigator";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate as Redirect,
} from "react-router-dom";
import {NavigationContainer} from '@react-navigation/native';
import SignUp from "./packages/common/SignUp/SignUp";
import SignIn from "./packages/common/SignIn/SignIn";
import Profile from "./packages/common/Profile/Profile";
import Main from "./packages/common/Main/Main";
import ForgotPassword from "./packages/common/ForgotPassword/ForgotPassword";
import CryptoDetails from './packages/common/CryptoDetails/CryptoDetails';
import UpdatePassword from './packages/common/UpdatePassword/UpdatePassword';
import Charts from './packages/common/Charts/Charts';

const AppNavigatorWeb = () => {
  if (useAppSelector((state) => state.user.isLoggedIn)) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Redirect to="/home" />} />
          <Route path="/home" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cryptoDetails" element={<CryptoDetails />} />
          <Route path="/charts" element={<Charts/>} />
          <Route path="/updatePassword" element={<UpdatePassword />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Redirect to="/home" />} />
          <Route path="/home" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    );
  }
};

const AppNavigatorMobile = props => {
  if (useAppSelector(state => state.user.isLoggedIn)) {
    console.log("test"+props);
    return (
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <LoginStackNavigator />
      </NavigationContainer>
    );
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        
          
        {Platform.OS==='web'?<AppNavigatorWeb/>:<AppNavigatorMobile/>} 
        
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});



//worked for mobile and image picked in web

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, Button } from 'react-native';

// import * as ImagePicker from 'expo-image-picker';

// function App() {
//   // The path of the picked image
//   const [pickedImagePath, setPickedImagePath] = useState('');

//   // This function is triggered when the "Select an image" button pressed
//   const showImagePicker = async () => {
//     // Ask the user for the permission to access the media library 
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert("You've refused to allow this appp to access your photos!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync();

//     // Explore the result
//     console.log(result);

//     if (!result.cancelled) {
//       setPickedImagePath(result.uri);
//       console.log(result.uri);
//     }
//   }

//   // This function is triggered when the "Open camera" button pressed
//   const openCamera = async () => {
//     // Ask the user for the permission to access the camera
//     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert("You've refused to allow this appp to access your camera!");
//       return;
//     }
//     alert("cam check")
//     const result = await ImagePicker.launchCameraAsync();

//     // Explore the result
//     console.log(result);

//     if (!result.cancelled) {
//       setPickedImagePath(result.uri);
//       console.log(result.uri);
//     }
//   }

//   return (
//     <View style={styles.screen}>
//       <View style={styles.buttonContainer}>
//         <Button onPress={showImagePicker} title="Select an image" />
//         <Button onPress={openCamera} title="Open camera" />
//       </View>

//       <View style={styles.imageContainer}>
//         {
//           pickedImagePath !== '' && <Image
//             source={{ uri: pickedImagePath }}
//             style={styles.image}
//           />
//         }
//       </View>
//     </View>
//   );
// }

// // Kindacode.com
// // Just some styles
// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     width: 400,
//     flexDirection: 'row',
//     justifyContent: 'space-around'
//   },
//   imageContainer: {
//     padding: 30
//   },
//   image: {
//     width: 400,
//     height: 300,
//     resizeMode: 'cover'
//   }
// });

// export default App;


