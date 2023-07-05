import { useAppSelector } from "../redux/hooks";
import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  Image,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { Camera } from "expo-camera";
import styles from "./Style";
import { stateLogout, setProfile } from "../redux/user-reducer";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as quoteActions from "../app/actions/quoteActions";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import FloatingAction from "../FloatingAction/FloatingAction";

const CameraModule = (props) => {
  const dispatch = useAppDispatch();
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          props.setModalVisible();
        }}
      >
        <Camera
          style={{ flex: 1 }}
          ratio="16:9"
          flashMode={Camera.Constants.FlashMode.on}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                icon="close"
                style={{ marginLeft: 12 }}
                mode="outlined"
                color="white"
                onPress={() => {
                  props.setModalVisible();
                }}
              >
                Close
              </Button>
              <TouchableOpacity
                onPress={async () => {
                  if (cameraRef) {
                    let photo = await cameraRef.takePictureAsync();
                    const temp = { uri: photo.uri };
                    dispatch(setProfile(temp));
                    props.setModalVisible();
                  }
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: "white",
                    height: 50,
                    width: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 16,
                    marginTop: 16,
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      borderColor: "white",
                      height: 40,
                      width: 40,
                      backgroundColor: "white",
                    }}
                  ></View>
                </View>
              </TouchableOpacity>
              <Button
                icon="axis-z-rotate-clockwise"
                style={{ marginRight: 12 }}
                mode="outlined"
                color="white"
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                {type === Camera.Constants.Type.back ? "Front" : "Back "}
              </Button>
            </View>
          </View>
        </Camera>
      </Modal>
    </View>
  );
};

function Profile(props) {
  const [details, setDetails] = useState({
    name: "",
    phoneNo: "",
  });

  const userData = useAppSelector((state) => state.user);

  String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };
  const permissionRequester = async () => {
    console.log("in permission request");
    if (!hasPermission) {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      if (status === "granted") {
        setShowCamera(true);
      }
    } else {
      setShowCamera(true);
    }
  };

  React.useEffect(() => {
    console.log("UseEffect");
    console.log(userData.sessionEmail);
    const URL = `https://reactnativewebpoc-dda22-default-rtdb.firebaseio.com/${userData.sessionEmail.replaceAll(
      ".",
      ","
    )}.json`;

    fetch(URL)
      .then((results) => results.json())
      .then((data) => {
        setDetails({ name: data.name, phoneNo: data.phone });
      });
  }, []);

  const { navigation } = props;

  const [image, setImage] = useState(null);
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [pickedImagePath, setPickedImagePath] = useState("");
  const [imageUri, setImageUri] = useState();

  const dispatch = useAppDispatch();
  const quotes = useSelector((state) => state.quotes);
  const logoutDispatch = () => dispatch(stateLogout());

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setImageUri(result.uri);
      console.log("picked" + result.uri);
      const temp = { uri: result.uri };
      dispatch(setProfile(temp));
    }
  };

  const Logout = () => {
    console.log("quotes : " + JSON.stringify(props));
    logoutDispatch();
    props.Logout();
  };

  let navigate;
  if (Platform.OS === "web") {
    navigate = useNavigate();
  }

  const logout = () => {
    if (Platform.OS === "web") {
      if (confirm("Are you sure you want to logout?")) {
        logoutDispatch();
        navigateToHome();
        Logout();
      }
    } else {
      Alert.alert("Alert", "Are you sure you want to logout?", [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: () => Logout() },
      ]);
    }
  };

  const navigateToProfile = () => {
    if (Platform.OS === "web") {
      navigation.navigate("Profile");
    } else navigation.navigate("Profile");
  };

  const navigateToHome = () => {
    if (Platform.OS === "web") {
      navigate("/");
    } else navigation.navigate("Main");
  };

  const navigateToUpdatePassword = () => {
    if (Platform.OS === "web") {
      navigate("/updatePassword");
    } else navigation.navigate("UpdatePassword");
  };

  return (
    <>
      {Platform.OS === "web" && (
        <View style={styles.navbar}>
          <TouchableOpacity
            style={styles.navbarIcon}
            onPress={() => navigateToHome()}
          >
            <Image
              style={styles.navbarImage}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/9/97/Cryptocurrency_Gold.png",
              }}
            />
          </TouchableOpacity>
          <View style={styles.navbarTab}>
            <Text
              onPress={() => navigateToHome()}
              style={
                window.location.pathname === "/home"
                  ? styles.navbarSelectedTab
                  : styles.navbarText
              }
            >
              HOME
            </Text>
            <Text
              onPress={() => navigateToProfile()}
              style={
                window.location.pathname === "/profile"
                  ? styles.navbarSelectedTab
                  : styles.navbarText
              }
            >
              PROFILE
            </Text>
          </View>
        </View>
      )}
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar} source={userData.userProfile} />
            <View style={styles.camcontainer}>
              <Text
                style={styles.cam}
                onPress={() => {
                  console.log(hasPermission);

                  permissionRequester();
                }}
              >
                Open Camera
              </Text>
              {camera && (
                <CameraModule
                  showModal={camera}
                  setModalVisible={() => setShowCamera(false)}
                  setImage={(result) => setImage(result.uri)}
                />
              )}
              <Text style={styles.cam} onPress={() => showImagePicker()}>
                Open Gallery
              </Text>
            </View>
            <Text style={styles.name}>{details.name}</Text>
            <FloatingAction
              navigateToUpdatePassword={navigateToUpdatePassword}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.infoContent}>
              <Text style={styles.infoMain}>Email :</Text>
              <Text style={styles.info}>{userData.sessionEmail}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.infoContent}>
              <Text style={styles.infoMain}>Phone Number :</Text>
              <Text style={styles.info}>{details.phoneNo}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => logout()} style={styles.logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function mapStateToProps(state) {
  return {
    quote: state.quote,
    isLoading: state.isLoading,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Logout: () => dispatch(quoteActions.Logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
