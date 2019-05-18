import React from 'react';
import PropTypes from 'prop-types';
import { 
  FormLayout,
  SelectMimicry,
  PanelHeader,
  Panel,
 } from '@vkontakte/vkui';

const propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.object
} 

const Search = (props) => {
  const { id, fields } = props;
  return (
    <Panel id={id}>
      <PanelHeader>Поиск</PanelHeader>
      <FormLayout>
        <SelectMimicry {...fields.from}>{fields.from.value}</SelectMimicry>
        <SelectMimicry {...fields.to}>{fields.to.value}</SelectMimicry>
      </FormLayout>
    </Panel>
  )
}

Search.propTypes = propTypes;

export default Search;