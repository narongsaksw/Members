import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';

class AddMemberScreen extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      id: '',
      phoneNumber: '',
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  handleSubmit = () => {
    const data = this.state;
    this.props.dispatch({
      type: 'ADD_MEMBER',
      data,
    });
    this.setState({
      name: '',
      id: '',
      phoneNumber: '',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="NAME"
          style={styles.input}
          value={this.state.name}
          onChangeText={val => this.inputValueUpdate(val, 'name')}
        />
        <TextInput
          placeholder="ID"
          style={styles.input}
          value={this.state.id}
          onChangeText={val => this.inputValueUpdate(val, 'id')}
        />
        <TextInput
          placeholder="PHONE NUMBER"
          style={{...styles.input, marginBottom: 20}}
          value={this.state.phoneNumber}
          onChangeText={val => this.inputValueUpdate(val, 'phoneNumber')}
        />
        <Button title="SUBMIT" onPress={() => this.handleSubmit()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginHorizontal: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 10,
    borderColor: '#D4D4D4',
  },
});

export default connect()(AddMemberScreen);
