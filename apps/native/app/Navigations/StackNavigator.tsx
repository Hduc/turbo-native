import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { StatusBar , StyleSheet , Platform , View} from "react-native";
import { useTheme } from "@react-navigation/native";

import SignIn from '../screens/Auth/signin';
import SignUp from '../screens/Auth/signup';



const MyStatusBar = ({ ...props }) => (
  <View style={[styles.statusBar]}>
      {Platform.OS === 'android' || Platform.OS === 'web' &&
        <StatusBar translucent {...props} />
      }
  </View>
);

const Stack = createStackNavigator();

const StackNavigator = () => {

  const {colors} = useTheme();
  const theme = useTheme();

  return (
    <View style={[styles.container,{backgroundColor:colors.background,flex:1}]}>
        <MyStatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
        <Stack.Navigator
          initialRouteName="signin"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "transparent",flex:1 },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="signin" component={SignIn} />
          <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
    </View>
  );
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : STATUSBAR_HEIGHT,
    },
    statusBar: {
        height: 0,
    },
});
export default StackNavigator;
