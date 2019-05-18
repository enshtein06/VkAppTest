import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { 
  View,
  FormLayout,
  SelectMimicry,
  PanelHeader,
  Panel,
 } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Search from './components/blocks/Search';

import SelectMimOptions from './components/common/SelectMimOptions';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'search',
      fetchedUser: null,
      fields: {
        from: {
          value: 'Санкт-Петербург',
          top: 'Откуда',
          placeholder: 'Выберите город вылета',
          onClick: this.handleFromClick,
          id: 'fromOptions',
          options: [
            {id: 'Город 1', value: 'Город 1'},
            {id: 'Город 2', value: 'Город 2'},
            {id: 'Город 3', value: 'Город 3'},
            {id: 'Город 4', value: 'Город 4'},
            {id: 'Город 5', value: 'Город 5'},
            {id: 'Город 6', value: 'Город 6'},
            {id: 'Город 7', value: 'Город 7'},
            {id: 'Город 8', value: 'Город 8'}
          ]
        },
        to: {
          value: '',
          top: 'Куда',
          placeholder: 'Выберете город полета',
          onClick: this.handleToClick,
          id: 'toOptions'
        }
      }
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
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

  handleActiveViewChange = (activePanel) => {
    this.setState({activePanel});
  }

  handleFromClick = () => {
    this.handleActiveViewChange(this.state.fields.from.id);
  }

  handleToClick = () => {
    this.handleActiveViewChange(this.state.fields.to.id);
  }

  handleOptionClick = (option, panelId) => {
    this.handleActiveViewChange('search');
    this.handleFieldValueChanged(option.id, panelId);
  }

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
  };

	render() {
    const { fields } = this.state;
		return (
			<View activePanel={this.state.activePanel}>
        <Search id='search' fields={fields} />
        <SelectMimOptions 
          title={fields.from.top}
          id={fields.from.id}
          handleOptionClick={this.handleOptionClick}
          go={this.go}
          back='search'
          options={fields.from.options}
          onSearchChange={() => {}}
          search='asd'
        />
			</View>
		);
	}
}

export default App;
