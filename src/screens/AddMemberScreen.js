import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class AddMemberScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Add my first member" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
  },
});

export default AddMemberScreen;
