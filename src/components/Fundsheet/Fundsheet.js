import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View
} from 'react-native';

import styles from './styles.js'

export default class Fundsheet extends Component {
  render() {
    return (
      <View>
        <Text>Coucou</Text>
        <Text>{this.props.getActiveTab()}</Text>
      </View>
    );
  }
}
