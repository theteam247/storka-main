/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Button, Animated, Easing} from 'react-native';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state={
      leftX: new Animated.Value(0),
      show: false,
    }
  }

  slide=()=>{
    if(!this.state.show){

      Animated.timing(
        this.state.leftX,
        {
          toValue: 2*width/3,
          duration: 300,
          easing: Easing.linear,
        }
      ).start();
      this.setState({
        show: true
      })
    }else{
      Animated.timing(
        this.state.leftX,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
        }
      ).start();
      this.setState({
        show: false
      })
    }
  }

  render() {
    return (
      <View style={{marginTop: 20, flex: 1}}>
        <Animated.View
          style={{
            backgroundColor: 'white',
            width: width,
            height: height,
            transform: [{translateX: this.state.leftX}],
            alignItems: 'flex-start',
            shadowColor:'#eee',
            shadowOffset:{h:10,w:10},
            shadowRadius:3,
            shadowOpacity:0.8,
          }}
        >
          <Button title={'侧滑'} onPress={this.slide}></Button>
          <Text>主内容</Text>
          <Text>主内容</Text>
          <Text>主内容</Text>
          <Text>主内容</Text>
          <Text>主内容</Text>
          <Text>主内容</Text>
          <Text>主内容</Text>
        </Animated.View>
        <View style={{
          width: width,
          height: height,
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: -1
        }}>
          <Text>侧滑展示内容</Text>
          <Text>侧滑展示内容</Text>
          <Text>侧滑展示内容</Text>
          <Text>侧滑展示内容</Text>
          <Text>侧滑展示内容</Text>
          <Text>侧滑展示内容</Text>
          <Text>侧滑展示内容</Text>
          <Text>侧滑展示内容</Text>
        </View>
      </View>
    );
  }
}


