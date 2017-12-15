import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#605ca8',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "lightgray",
    alignSelf: 'stretch',
    flexDirection:'column'
  },
  bottom_nav: {
    height: 50,
    backgroundColor: "#fafafa",
    alignSelf: 'stretch',
    flexDirection:"row"
  },
  bottom_nav_button:{
      flex:1,
      textAlign: 'center'
  },
  top_nav: {
    height: 50,
    backgroundColor: "#605ca8",
    alignSelf: 'stretch'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  company_logo: {
    height: 50,
    width: 150
  }
});