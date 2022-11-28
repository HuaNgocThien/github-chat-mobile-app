import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import styles from './styles';

function WelcomScreen(props) {
  return (
    <View style={styles.background}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="stretch"
        source={require('../../assets/ndlogo.png')}>
        <View style={styles.logoBox}>
          <View style={styles.logoTop}>
            <Image
              style={styles.iconTop}
              source={require('../../assets/flame.png')}
            />
            <Text>ND GAMING</Text>
            <View style={{flex: 1}} />
            <Image
              style={styles.iconQuestion}
              source={require('../../assets/question.png')}
            />
          </View>
        </View>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.welcomeText}>ND Gaming</Text>
        </View>
        <View style={{backgroundColor: 'green', flex: 4}} />
        <View style={{backgroundColor: 'yellow', flex: 2}} />
      </ImageBackground>
    </View>
  );
}

export default WelcomScreen;
