import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTabsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "home"
    }
  };
  render() {
    return (
      <Footer >
        <FooterTab>
          <Button
            active={this.props.isTabActive('home')}
            onPress={() => this.props.activateTab('home')} >
            <Icon name="home" />
          </Button>
          <Button
            active={this.props.isTabActive('performances')}
            onPress={() => this.props.activateTab('performances')} >
            <Icon name="stats" />
          </Button>
          <Button
            active={this.props.isTabActive('navs')}
            onPress={() => this.props.activateTab('navs')} >
            <Icon name="card" />
          </Button>
          <Button
            active={this.props.isTabActive('commissions')}
            onPress={() => this.props.activateTab('commissions')} >
            <Icon name="pie" />
          </Button>
          <Button
            active={this.props.isTabActive('caracteristics')}
            onPress={() => this.props.activateTab('caracteristics')} >
            <Icon name="list" />
          </Button>
          <Button
            active={this.props.isTabActive('documents')}
            onPress={() => this.props.activateTab('documents')} >
            <Icon name="paper" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
