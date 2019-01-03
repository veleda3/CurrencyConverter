import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, Seperator } from './index';

const TEMP_CURRENT_CURRENCY = true

const List = ({ itemPressed, selected, data }) => {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            itemPressed={itemPressed}
            item={item}
            selected={!!selected.get(item)}
          />)}
        keyExtractor={item => item}
        ItemSeparatorComponent={Seperator}
        extraData={selected}
      />
    );
}
List.propTypes = {
  itemPressed: PropTypes.func,
  selected: PropTypes.object,
  data: PropTypes.array,
};

export default List;
