import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';

class MemberCard extends Component {
  onDelete = id => {
    this.props.dispatch({
      type: 'DELETE_MEMBER',
      id,
    });
  };

  Alert = (id, name) =>
    Alert.alert('Confirmation', `Are you sure to delete ${name}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => this.onDelete(id)},
    ]);
  render() {
    const {id, name, phoneNumber} = this.props.item;
    return (
      <View style={styles.container}>
        <View>
          <Text>{name}</Text>
          <Text>{id}</Text>
          <Text>{phoneNumber}</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text>Edit</Text>
          <Text onPress={() => this.Alert(id, name)}>Delete</Text>
        </View>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default connect()(MemberCard);
