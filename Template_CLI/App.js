//This is an example code to understand Image//
import React, { Component } from 'react';
//import react in our code.
import { Text, Image, View, StyleSheet,Button } from 'react-native';
//import all the components we are going to use.
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:''
    };
  }
  onclick=()=>{
    this.setState({
      text:'I_Love_You_MaM (*_*) :)'
    })
  }
  render() {
    const handlePress = () => false
    return (
      <View style={styles.container}> 
        {/* <Image 
          source={require('./src/photos/1.jpg')}  
          style={{width: 400, height: 400}} 
        /> */}
        <Text>
        {this.state.text}
        </Text>
        <Button
          onPress = {this.onclick}
          title = "Red button!"
          color = "red"
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
});