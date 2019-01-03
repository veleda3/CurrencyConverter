import React, { Component } from 'react';
import { View, Text, ImageBackground, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeImageContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallImageContainer,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImage,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeImageContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.logoContainer,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [styles.image, { width: this.imageWidth }];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground
            source={require('./images/background.png')}
            style={styles.backgroundImage}
            resizeMode="contain"
          >
            <Animated.Image
              source={require('./images/logo.png')}
              style={imageStyle}
              resizeMode="contain"
            />
          </ImageBackground>
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
