import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Body } from 'native-base';

import styles from './styles.js'

export default class ParvestHeader extends Component {
  render() {
    return (
      <Header androidStatusBarColor='#00965e' >
        <Body>
          <Text style={styles.headerTitle}>{this.props.fundName}</Text>
        </Body>
      </Header>
    );
  }
}
