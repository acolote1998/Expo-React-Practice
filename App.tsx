import React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import cordobaImage from "./assets/images/cordoba.png";
import saltaImage from "./assets/images/salta.png";

const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to My Trips"
      onPress={() => navigation.navigate("My Trips")}
    />
  </View>
);

const ProfileScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>My Trips</Text>
    <Button title="Cordoba" onPress={() => navigation.navigate("Cordoba")} />
    <Button title="Salta" onPress={() => navigation.navigate("Salta")} />
  </View>
);

const CordobaScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Cordoba Screen</Text>
    <Image source={cordobaImage} />
  </View>
);

const SaltaScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Salta Screen</Text>
    <Image source={saltaImage} />
  </View>
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="My Trips" component={ProfileScreen} />
      <Stack.Screen name="Cordoba" component={CordobaScreen} />
      <Stack.Screen name="Salta" component={SaltaScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
