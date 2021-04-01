import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class MemberCard extends Component {
  render() {
    const {id, name, phoneNumber} = this.props.item;
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{id}</Text>
        <Text>{phoneNumber}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#0085e6',
    borderRadius: 15,
    backgroundColor: '#0085e6',
    padding: 15,
    marginVertical: 10,
  },
});
export default MemberCard;
