import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {images, icon} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

function WelcomScreen(props) {
  return (
    <View style={styles.background}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="stretch"
        source={images.logoND}>
        <View style={styles.logoBox}>
          <View style={styles.logoTop}>
            <Image style={styles.iconTop} source={icon.iconFlame} />
            <Text>ND CHAT</Text>
            <View style={{flex: 1}} />
            <Image style={styles.iconQuestion} source={icon.iconQuestion} />
          </View>
        </View>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.welcomeText}>ND Chat</Text>
          <Text style={styles.welcomeText}>
            Please select your account type !!!
          </Text>
        </View>
        <View style={{backgroundColor: 'green', flex: 4}}>
          <TouchableOpacity style={styles.btnInflu}>
            <Text style={styles.textBtn}>Influencer</Text>
            <Ionicons
              testID="nextButton"
              name="arrow-forward"
              color="rgba(255, 255, 255, .9)"
              size={24}
              style={{backgroundColor: 'transparent'}}
            />
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: 'yellow', flex: 2}} />
      </ImageBackground>
    </View>
  );
}

export default WelcomScreen;
