import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';

class EditMemberScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.route.params.data.name,
      citizenId: this.props.route.params.data.citizenId,
      phoneNumber: this.props.route.params.data.phoneNumber,
    };
  }

  // componentDidMount(){

  // }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  handleSubmit = () => {
    const data = this.state;
    this.props.dispatch({
      type: 'EDIT_MEMBER',
      id: this.props.route.params.data.id,
      data,
    });
    this.props.navigation.navigate('MainMemberScreen');
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
          value={this.state.citizenId}
          onChangeText={val => this.inputValueUpdate(val, 'citizenId')}
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

export default connect()(EditMemberScreen);
