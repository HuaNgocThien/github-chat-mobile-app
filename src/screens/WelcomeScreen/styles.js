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
  },
  welcomeText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  btnInflu: {
    borderColor: 'white',
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default styles;
