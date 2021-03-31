import React, {Component} from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
// import store from './src/store';
class App extends Component {
  render() {
    return (
      //  <Provider store={store}>
      // <SafeAreaView>
      //   <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Navigation />
      // <Text>Hello</Text>
      //   </ScrollView>
      // </SafeAreaView>
      //  </Provider>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
