import React, { Component } from 'react';

import { Container, Content} from 'native-base';

import Fundsheet from './Fundsheet/Fundsheet';
import ParvestHeader from './Fundsheet/ParvestHeader'
import FooterTabsExample from './Fundsheet/FooterTabs'

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'home',
    }
  }

  _activateTab = (tab) => {
    this.setState({
      activeTab: tab
    });
  };

  _isTabActive = (tab) => {
    return tab === this.state.activeTab;
  };

  _getActiveTab = () => {
    return this.state.activeTab
  }

  render() {
    return (
      <Container>
        <ParvestHeader fundName={this.props.dataSource.header.name}/>
        <Content>
          <Fundsheet
            dataSource={this.props.dataSource}
            getActiveTab={this._getActiveTab.bind(this)} />
        </Content>
        <FooterTabsExample
          activateTab={this._activateTab.bind(this)}
          isTabActive={this._isTabActive.bind(this)} />
      </Container>
    );
  }
}
