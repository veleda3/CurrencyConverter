import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Icon = ({ iconColor = null, visible, checkmark }) => {
    const iconContainerStyles = [styles.icon];
    if(visible) {
        iconContainerStyles.push(styles.iconVisible);
    }

    if(iconColor) {
        iconContainerStyles.push({ backgroundColor: iconColor })
    }
    console.log(visible)
    return (
        <View style={iconContainerStyles}>
            {checkmark ? <Image  source={require('./images/check.png')} style={styles.image} resizeMode="contain" /> : null }
        </View>
    )
}

Icon.propTypes = {
  iconColor: PropTypes.string,
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
}; 

export default Icon;
