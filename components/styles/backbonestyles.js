import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const d = Dimensions.get('window');

const s = StyleSheet.create({
  image: {
    width: d.width - 60,
    top: -70,
    height: 125,
    borderRadius: 10,
  },
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#388E3C',
  },
  secondaryView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C8E6C9',
  },
  primaryNavigation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#388E3C',
  },

  textPrimary: {
    color: '#FFFFFF',
  },
  primaryText: {
    color: '#212121',
  },
  secondaryText: {
    color: '#757575',
  },
  dividerColor: {
    color: '#BDBDBD',
  },
  appTitle: {
    fontWeight: '700',
    fontSize: 25,
    fontFamily: 'notoserif',
    bottom: 30,
    marginTop: 0,
    color: '#ffa500',
  },
  appTitleW: {
    fontWeight: '700',
    fontSize: 25,
    fontFamily: 'notoserif',
    bottom: 30,
    textAlign: 'center',
    marginTop: 0,
    color: '#ffa500',
  },
  loginContainer: {
    alignItems: 'center',
    bottom: 30,
  },
  input: {
    width: WIDTH - 70,
    height: 45,
    borderRadius: 25,
    paddingLeft: 45,
    backgroundColor: '#ffedcc',
    marginTop: 20,
    color: 'black',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 25,
    left: 45,
  },
  guideText: {
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'notoserif',
    marginTop: 0,
    color: '#ffedcc',
    opacity: 0.5,
  },
  loginText: {
    fontWeight: '400',
    fontSize: 17,
    fontFamily: 'notoserif',
    marginTop: 0,
    color: '#ffedcc',
  },
  primaryButton: {
    backgroundColor: '#FFC107',
    width: WIDTH - 200,
    height: 45,
    borderRadius: 10,
    paddingLeft: 45,
    marginTop: 25,
    color: 'white',
    marginHorizontal: 25,
    textAlign: 'center',
    backfaceVisibility: 'hidden',
  },
  secondaryButton: {
    backgroundColor: '#FFC107',
    borderColor: '#ffa500',
    width: WIDTH - 200,
    height: 25,
    borderRadius: 10,
    paddingLeft: 45,
    marginTop: 25,
    color: 'white',
    marginHorizontal: 25,
    textAlign: 'center',
    backfaceVisibility: 'hidden',
  },
  signupBtnText: {
    fontWeight: '500',
    fontSize: 13,
    top: 10,
    left: 10,
    fontFamily: 'notoserif',
    color: '#ffa500',
  },
  loginBtnText: {
    fontWeight: '500',
    fontSize: 17,
    top: 10,
    left: 10,
    fontFamily: 'notoserif',
    color: '#191000',
  },

  welcomeView: {
    backgroundColor: '#527318',
    height: '100%',
    textAlign: 'center',
  },
});

export {s};
