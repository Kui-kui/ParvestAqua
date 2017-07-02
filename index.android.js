import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Container, Body} from 'native-base';

import AppContainer from './src/components/AppContainer'

export default class ParvestAqua extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    return fetch('https://api.is.bnpparibas-ip.com/push/fundsheet/IP_FR-FSE/FRA/FRE/18052')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <Text>Waiting ...</Text>
        </View>
      );
    }

    return (
      <AppContainer />
    );
  }
}

AppRegistry.registerComponent('ParvestAqua', () => ParvestAqua);
