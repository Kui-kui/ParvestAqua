import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { FormattedDate, FormattedNumber } from 'react-intl-native'

import { Content, Grid, Col} from 'native-base';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';

import styles from './styles.js'

export default class Navs extends Component {

  render() {
    return (
      <HeaderImageScrollView
        maxHeight={250}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={require('../../assets/images/navs.jpg')} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>Navs</Text>
          </View>
        )} >
        <Content padder>
        </Content>
      </HeaderImageScrollView>
    );
  }
}
