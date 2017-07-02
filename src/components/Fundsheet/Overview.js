import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import { FormattedDate, FormattedNumber } from 'react-intl-native'

import { Body, Card, CardItem, Content, Grid, Col} from 'native-base';

import styles from './styles.js'

export default class Overview extends Component {

  _renderBlock(value, label, date, maximumFractionDigits) {
    return(
      <Col style={styles.keyNumbersBlock}>
        <View>
          <Text style={styles.keyNumbersTitle}>
            <FormattedNumber
              maximumFractionDigits={maximumFractionDigits}
              value={value} />
            €
          </Text>
          <Text style={styles.keyNumbersText}>{label}</Text>
          <Text style={styles.keyNumbersText}>
            (
            <FormattedDate
              value={date}
              year='numeric'
              month='2-digit'
              day='2-digit'
            />
            )
          </Text>
        </View>
      </Col>
    )
  }

  render() {
    let classification = this.props.dataSource.classification;
    let keyNumbers = this.props.dataSource.overview.key_numbers

    return (
      <Content>
        <Text style={styles.title}>Aperçu</Text>
        <Grid style={styles.keyNumbersGrid}>
          {this._renderBlock(keyNumbers.aum.value, 'Actif total du compartiment', keyNumbers.aum.market, 0)}
          {this._renderBlock(keyNumbers.performance_ytd_timed.EUR.value, 'Perf. depuis le début de l\'année', keyNumbers.performance_ytd_timed.EUR.end_date, 2)}
          {this._renderBlock(keyNumbers.performance_3y_timed.shares.EUR.value, 'Perf. 3 ans', keyNumbers.performance_3y_timed.shares.EUR.end_date, 2)}
        </Grid>
      </Content>
    );
  }
}
