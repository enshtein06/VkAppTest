import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderButton, 
  platform, 
  IOS
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const propTypes = {
  go: PropTypes.func.isRequired,
  back: PropTypes.string.isRequired
}

const HeaderButtonComp = (props) => {
  const { go, back } = props;
  return (
    <HeaderButton onClick={go} data-to={back}>
      {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
    </HeaderButton>
  )
}

HeaderButtonComp.propTypes = propTypes;

export default HeaderButtonComp;
