import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Body, Title } from 'native-base';

export default class ParvestHeader extends Component {
  render() {
    return (
      <Header
        backgroundColor='#00965e'
        androidStatusBarColor='#00965e'
      >
        <Body>
          <Title>PARVEST AQUA</Title>
        </Body>
      </Header>
    );
  }
}
