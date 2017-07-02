import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/fr.js';
import fr from 'react-intl/locale-data/fr'
import { addLocaleData, IntlProvider } from 'react-intl'

import AppContainer from './src/components/AppContainer'

export default class ParvestAqua extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
    addLocaleData([...fr]);
  }

  componentWillMount () {
    fetch('https://www.bnpparibas-am.fr/translation/locale/fr_FR')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          translations: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
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
      <IntlProvider locale='fr-FR' messages={this.state.translations}>
        <AppContainer dataSource={this.state.dataSource} />
      </IntlProvider>
    );
  }
}

AppRegistry.registerComponent('ParvestAqua', () => ParvestAqua);
