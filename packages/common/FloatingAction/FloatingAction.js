import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyComponent = (props) => {
  const { navigation } = props;

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  let navigate;
  if (Platform.OS === "web") {
    navigate = useNavigate();
  }


  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'folder',
              label: 'UpdatePassword',
              onPress: () => props.navigateToUpdatePassword(),
            },
            // {
            //   icon: 'bell',
            //   label: 'UI Components',
            //   // onPress: () => console.log('Pressed notifications'),
            // },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default MyComponent;