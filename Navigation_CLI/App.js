// In App.js in a new project
import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Нүүр 2 луу"
        onPress={() => this.props.navigation.navigate('Details')}
      />
      </View>
    );
  }
}

// Other code for HomeScreen here...

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Нүүр 1 рүү"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

// Other code for App component here...
export default createAppContainer(AppNavigator);