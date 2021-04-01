import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Input from 'react-native-text-input-mask';
import {connect} from 'react-redux';

class AddMemberScreen extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      citizenId: '',
      phoneNumber: '',
      error: {
        name: false,
        citizenId: false,
        phoneNumber: false,
      },
    };
  }

  inputValueUpdate = (val, prop, length) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);

    if (!val) {
      this.setState({error: {[prop]: `กรุณากรอกข้อมูลให้ครบถ้วน`}});
    } else if (prop === 'phoneNumber' && val.length < length) {
      this.setState({error: {[prop]: 'กรุณากรอกหมายเลขโทรศัพท์ให้ครบถ้วน'}});
    } else if (prop === 'phoneNumber' && val.length === length) {
      const splitString = val.split('');
      if (splitString[0] != '0') {
        this.setState({error: {[prop]: 'กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง'}});
      } else {
        this.setState({error: {[prop]: false}});
      }
    } else if (prop === 'citizenId' && val.length < length) {
      this.setState({error: {[prop]: 'กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง'}});
    } else {
      this.setState({error: {[prop]: false}});
    }
  };

  handleSubmit = () => {
    const data = this.state;
    this.props.dispatch({
      type: 'ADD_MEMBER',
      data: {
        ...data,
        id: Math.random().toString(36).substring(7),
      },
    });
    this.setState({
      name: '',
      citizenId: '',
      phoneNumber: '',
    });
  };
  render() {
    const {error} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="NAME"
          style={styles.input}
          value={this.state.name}
          onChangeText={val => this.inputValueUpdate(val, 'name')}
        />
        {error.name && <Text style={styles.error}>*{error.name}</Text>}
        <Input
          placeholder="ID"
          style={styles.input}
          value={this.state.citizenId}
          onChangeText={val => this.inputValueUpdate(val, 'citizenId', 17)}
          keyboardType="numeric"
          mask={'[0]-[0000]-[00000]-[00]-[0]'}
        />
        {error.citizenId && (
          <Text style={styles.error}>*{error.citizenId}</Text>
        )}
        <Input
          placeholder="PHONE NUMBER"
          style={{...styles.input, marginBottom: 20}}
          value={this.state.phoneNumber}
          onChangeText={val => this.inputValueUpdate(val, 'phoneNumber', 12)}
          keyboardType="numeric"
          mask={'[000]-[000]-[0000]'}
        />
        {error.phoneNumber && (
          <Text style={{...styles.error, marginBottom: 10}}>
            *{error.phoneNumber}
          </Text>
        )}
        <Button
          title="SUBMIT"
          onPress={() => this.handleSubmit()}
          // disabled={disabled}
        />
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
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default connect()(AddMemberScreen);
