import React, { Component } from 'react';
import { View } from 'react-native';

import Caracteristics from './Caracteristics'
import Commissions from './Commissions'
import Documents from './Documents'
import Navs from './Navs'
import Overview from './Overview'
import Performances from './Performances'

export default class Fundsheet extends Component {

  _renderTab = () => {
    switch (this.props.getActiveTab()) {
      case 'performances':
        return <Performances dataSource={this.props.dataSource} />;
      case 'navs':
        return <Navs dataSource={this.props.dataSource} />;
      case 'commissions':
        return <Commissions dataSource={this.props.dataSource} />;
      case 'caracteristics':
        return <Caracteristics dataSource={this.props.dataSource} />;
      case 'documents':
        return <Documents dataSource={this.props.dataSource} />;
      default:
        return <Overview dataSource={this.props.dataSource} />;
    }
  }

  render() {
    return <View>{this._renderTab()}</View>;
  }
}
