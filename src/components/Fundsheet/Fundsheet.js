import React, { Component } from 'react';
import { View } from 'react-native';

import Overview from './Overview'
import Performances from './Performances'

export default class Fundsheet extends Component {

  _renderTab = () => {
    switch (this.props.getActiveTab()) {
      case 'performances':
        return <Performances dataSource={this.props.dataSource} />;
      default:
        return <Overview dataSource={this.props.dataSource} />;
    }
  }

  render() {
    return <View>{this._renderTab()}</View>;
  }
}
