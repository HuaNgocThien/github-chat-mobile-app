import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 10,
  },
  iconTop: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
  },
  logoTop: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconQuestion: {
    width: 20,
    height: 20,
    tintColor: 'white',
    marginEnd: 10,
  },
  imageBackground: {
    flex: 10,
  },
  logoBox: {
    flex: 1.5,
  },
  welcomeBox: {
    flex: 2,
    backgroundColor: 'blue',
  },
  welcomeText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});
export default styles;
