import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Cell } from '@vkontakte/vkui';

class CellComponent extends PureComponent {
  static propTypes = {
    option: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.onClick(this.props.option);
  }
  
  render() {
    return (
      <Cell onClick={this.handleClick}>{this.props.option.value}</Cell>
    )
  }
}

export default CellComponent;
