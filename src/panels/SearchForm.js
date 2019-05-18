import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Panel, 
  PanelHeader, 
  HeaderButton, 
  platform, 
  IOS, 
  Group,
  Div, 
  Cell
} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  back: PropTypes.string.isRequired
}

const osname = platform();

class SearchForm extends PureComponent {
  leftButton = (
    <HeaderButton onClick={this.props.go} data-to={this.props.back}>
  		{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</HeaderButton>
  )

  handleClick = (event) => {
    console.log(event.target);
  }

  render () {
    const { id } = this.props;
    return (
      <Panel id={id}>
        <PanelHeader left={this.leftButton}>Туры по миру</PanelHeader>
        <Group>
          <Div>askjhaskdh</Div>
          <Cell id="cell" name='cell' onClick={this.handleClick}>sdkjas</Cell>
        </Group>
      </Panel>
    )
  }
}

SearchForm.propTypes = propTypes;

export default SearchForm;
