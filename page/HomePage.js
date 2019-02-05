/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class HomePage extends Component<Props> {
  static navigationOptions ={
      title:'Home'
  }
 
  render() {
      const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React HomePage!</Text>
        <Button title={'Go to page1'} onPress={()=>{
            navigation.navigate('Page1',{name:'动态的'})
        }}/>
        <Button title={'Go to page2'} onPress={()=>{
            navigation.navigate('Page2')
        }}/>
         <Button title={'Go to page3'} onPress={()=>{
            navigation.navigate('Page3',{name:'page3'})
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
