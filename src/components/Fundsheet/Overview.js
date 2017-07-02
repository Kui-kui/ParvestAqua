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

  _renderKeyNumber(value, label, date, maximumFractionDigits) {
    return(
      <Col style={styles.block}>
        <View>
          <Text style={styles.blockTitle}>
            <FormattedNumber
              maximumFractionDigits={maximumFractionDigits}
              value={value} />
            €
          </Text>
          <Text style={styles.blockText}>{label}</Text>
          <Text style={styles.blockText}>
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

  _renderGeneralInfo(value, label, sublabel) {
    if (!value) {
      value = 'N/A'
      sublabel = null
    }
    return(
      <Col style={styles.block}>
        <View>
          <Text style={styles.blockTitle}>{value}</Text>
          <Text style={styles.blockText}>{label}</Text>
          <Text style={styles.blockText}>{sublabel}</Text>
        </View>
      </Col>
    )
  }

  render() {
    let classification = this.props.dataSource.classification;
    let fundshareSelection = this.props.dataSource.fundshare_selection;
    let keyNumbers = this.props.dataSource.overview.key_numbers
    let risk = this.props.dataSource.risk
    let manager = this.props.dataSource.manager

    return (
      <Content>
        <Text style={styles.title}>Aperçu</Text>
        <Grid style={styles.grid}>
          {this._renderGeneralInfo(fundshareSelection.isin, 'Code ISIN', '')}
          {this._renderGeneralInfo(keyNumbers.base_currency, 'Devise de base', '')}
          {this._renderGeneralInfo(fundshareSelection.morning_star_timed.value, 'Note Morningstar', '(' + fundshareSelection.morning_star_timed.date + ')')}
        </Grid>
        <Grid style={styles.grid}>
          {this._renderKeyNumber(keyNumbers.aum.value, 'Actif total du compartiment', keyNumbers.aum.market, 0)}
          {this._renderKeyNumber(keyNumbers.performance_ytd_timed.EUR.value, 'Perf. depuis le début de l\'année', keyNumbers.performance_ytd_timed.EUR.end_date, 2)}
          {this._renderKeyNumber(keyNumbers.performance_3y_timed.shares.EUR.value, 'Perf. 3 ans', keyNumbers.performance_3y_timed.shares.EUR.end_date, 2)}
        </Grid>
        <Grid style={styles.grid}>
          {this._renderGeneralInfo(classification.asset_class, 'Classe d\'actif', '')}
          {this._renderGeneralInfo(classification.sub_asset_class, 'Sous classe d\'actif', '')}
          {this._renderGeneralInfo(classification.region, 'Région', '')}
        </Grid>
        <Grid style={styles.grid}>
          {this._renderGeneralInfo(risk.srri_risk, 'Niveau de risque', '')}
          {this._renderGeneralInfo(manager.fname + ' ' + manager.lname, 'Gestionnaire', '(' + manager.begin + ')')}
          {this._renderGeneralInfo(classification.investment_strategy, 'Politique d\'investissement', '')}
        </Grid>
      </Content>
    );
  }
}
