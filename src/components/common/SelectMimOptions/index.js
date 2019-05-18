import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Panel, 
  PanelHeader,
  Group,
  List,
  Search
} from '@vkontakte/vkui';
import Cell from './Cell';
import HeaderButton from '../HeaderButton';

const propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  search: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string
  })),
  handleOptionClick: PropTypes.func,
  onSearchChange: PropTypes.func
}

const defaultProps = {
  title: '',
  id: 'id'
}

class SelectMimOptions extends PureComponent {
  handleOptionClick = (option) => {
    this.props.handleOptionClick(option, this.props.id);
  }

  leftButton = (
    <HeaderButton go={this.props.go} back={this.props.back} />
  )

  render() {
    const { title, id, options, search, onSearchChange } = this.props;
    return (
      <Panel id={id}>
        <PanelHeader left={this.leftButton}>{title}</PanelHeader>
        <Search value={search} onChange={onSearchChange} />
        <Group>
          <List>
            {options.map(option => {
              return (
                <Cell 
                  key={option.id} 
                  onClick={this.handleOptionClick} 
                  option={option}
                />
              )
            })}
          </List>
        </Group>
      </Panel>
    )
  }
}

SelectMimOptions.propTypes = propTypes;
SelectMimOptions.defaultProps = defaultProps;

export default SelectMimOptions;
