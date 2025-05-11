import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
    <Button
      title="Go to Trip Details"
      onPress={() => navigation.navigate("Trip Details")}
    />
  </View>
);

const TripDetailsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Details Screen</Text>
  </View>
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="My Trips" component={ProfileScreen} />
      <Stack.Screen name="Trip Details" component={TripDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
