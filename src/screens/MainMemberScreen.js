import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import MemberCard from '../components/memberCard';

class MainMemberScreen extends Component {
  constructor() {
    super();
  }
  toAddMember = () => {
    this.props.navigation.navigate('AddMemberScreen');
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.members.map(item => (
          <MemberCard
            key={item.id}
            item={item}
            navigation={this.props.navigation}
          />
        ))}
        {this.props.members.length === 0 ? (
          <TouchableOpacity onPress={this.toAddMember}>
            <View style={styles.buttonBlue}>
              <Text style={{textAlign: 'center', color: '#fff'}}>
                Add my first member
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={this.toAddMember}>
            <View style={styles.buttonWhite}>
              <Text style={{textAlign: 'center', color: '#0085e6'}}>
                Add member
              </Text>
            </View>
          </TouchableOpacity>
        )}
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
  buttonWhite: {
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#0085e6',
  },
  buttonBlue: {
    borderRadius: 5,
    backgroundColor: '#0085e6',
    padding: 10,
  },
});

const mapState = state => {
  return {
    members: state,
  };
};

export default connect(mapState)(MainMemberScreen);
