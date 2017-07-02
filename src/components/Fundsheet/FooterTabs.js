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
            active={this.props.isTabActive('stats')}
            onPress={() => this.props.activateTab('stats')} >
            <Icon name="stats" />
          </Button>
          <Button
            active={this.props.isTabActive('card')}
            onPress={() => this.props.activateTab('card')} >
            <Icon name="card" />
          </Button>
          <Button
            active={this.props.isTabActive('pie')}
            onPress={() => this.props.activateTab('pie')} >
            <Icon name="pie" />
          </Button>
          <Button
            active={this.props.isTabActive('list')}
            onPress={() => this.props.activateTab('list')} >
            <Icon name="list" />
          </Button>
          <Button
            active={this.props.isTabActive('paper')}
            onPress={() => this.props.activateTab('paper')} >
            <Icon name="paper" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
