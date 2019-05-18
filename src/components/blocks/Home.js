import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Panel,
  FormLayout,
  SelectMimicry,
  PanelHeader,
  ListItem, 
  Button, 
  Group, 
  Div, 
  Avatar, 
 } from '@vkontakte/vkui';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'search',
      fields: {
        from: {
          value: 'Санкт-Петербург',
          top: 'Откуда',
          placeholder: 'Выберите город вылета',
          onClick: this.handleFromClick,
          id: 'fromOptions'
        },
        to: {
          value: '',
          top: 'Куда',
          placeholder: 'Выберете город полета',
          onClick: this.handleToClick,
          id: 'toOptions'
        }
      }
    }
  }

  handleFieldValueChanged = (value, name) => {
    this.setState(prevState => {
      return {
        ...prevState.fields,
        [name]: {
          ...prevState.fields[name],
          value
        }
      }
    });
  }

  handleActiveViewChange = (activeView) => {
    this.setState({activeView});
  }

  handleFromClick = () => {
    this.handleActiveViewChange(this.state.fields.from.id);
  }

  handleToClick = () => {
    this.handleActiveViewChange(this.state.fields.to.id);
  }

  render() {
    const { fields } = this.state;
    return (
      <View activeView={this.state.activeView}>
        <Panel id='search'>
          <PanelHeader>Поиск туров</PanelHeader>
          <FormLayout>
            <SelectMimicry {...fields.from}>{fields.from.value}</SelectMimicry>
            <SelectMimicry {...fields.to}>{fields.to.value}</SelectMimicry>
          </FormLayout>
        </Panel>
      </View>
    )
  }
}

export default Home;
