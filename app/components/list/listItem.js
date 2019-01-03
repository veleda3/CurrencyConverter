import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from './icon';
import PropTypes from 'prop-types';
import styles from './styles';

const ListItem = ({ itemPressed, item, selected, checkmark = true, visible = true, customeIcon = null, iconColor }) => {
    console.log(`hitting selected: ${selected}`)
  return (
    <TouchableHighlight onPress={() => itemPressed(item)} underlayColor={styles.$underleyColor}>
      <View style={styles.container}>
        <Text style={styles.text}>{item}</Text>
        {selected ? <Icon checkmark={checkmark} visible={visible} iconColor={iconColor} /> : <Icon iconColor={iconColor} />}
        {customeIcon}
      </View>
    </TouchableHighlight>
  )
}


ListItem.propTypes = {
  itemPressed: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customeIcon: PropTypes.element,
  iconColor: PropTypes.string,
};

export default ListItem;
