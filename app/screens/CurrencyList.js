import React from 'react';
import {Text, FlatList, View, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import { ClearContainer } from '../components/container';
import Currencies from '../data/currencies';

import { List } from '../components/list';

class CurrencyList extends React.Component {

    static propType = {
        navigation: PropTypes.object,
    }

    state = { 
      selected: (new Map(): Map<string, boolean>),
      currencies: [],
     }

    componentDidMount() {
        this.setState({
            currencies: Currencies,
        })
    }

    handleItemPressed = (id) => {
      this.setState((state) => {
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id));
        return {selected};
      });
      this.props.navigation.goBack();
    };

    render() {
        const { selected, currencies } = this.state;
      return (
        <ClearContainer>
          <StatusBar />
          <List itemPressed={this.handleItemPressed} selected={selected} data={currencies} />
        </ClearContainer>
      );
    }
}

export default CurrencyList;
