import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  text_color: {
    marginLeft: 10,
    marginBottom: 10,
    color: '#152C52'
  },
  login_color: {
    marginLeft: 10,
    marginBottom: 10,
    color: '#fff'
  },
  normal_text: {
    color: '#152C52',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  bottom_nav: {
    height: 50,
    backgroundColor: "#fafafa",
    alignSelf: 'stretch',
    flexDirection: "row"
  },
  bottom_nav_button: {
    flex: 1,
    textAlign: 'center'
  },
  top_nav: {
    height: 50,
    backgroundColor: "#fff",
    alignSelf: 'stretch'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    color: '#152C52',
    marginBottom: 5,
  },
  title: {
    paddingLeft: 10,
    textAlign: 'left',
    alignSelf: 'stretch',
    flexDirection: 'row',
    color: '#152C52',
    fontSize: 24,
    marginBottom: 5,
  },
  details_top: {
    paddingLeft: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginBottom: 2,
  },
  company_logo: {
    height: 100,
    width: 100,
    alignSelf: "center"
  },
  item: {
    alignSelf: 'stretch',
    padding: 10,
    height: 60,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#152C52'
  },
  header: {
    alignSelf: 'stretch',
    padding: 10,
    height: 80,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#152C52'
  },
  item_text: {
    color: '#152C52',
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 10,
    justifyContent: "center"
  },
  item_text_title: {
    alignSelf: 'stretch',
    color: '#152C52',
    fontSize: 16,
    fontWeight: "900",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 15
  },
  item_text_name: {
    alignSelf: 'stretch',
    color: '#152C52',
    fontSize: 18,
    justifyContent: "center"
  },
  item_sub_text: {
    color: '#152C52',
    fontSize: 14,
    paddingLeft: 10,
    justifyContent: "center"
  },
  item_text_bold: {
    color: '#152C52',
    fontSize: 18,
    fontWeight: "900",
    paddingLeft: 10,
    justifyContent: "center"
  },
  item_icon: {
    height: 40,
    width: 40
  },
  search: {
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#152C52',
    borderWidth: 1,
    height: 40,
    fontSize: 18,
    borderColor: '#152C52'
  },
  login_input: {
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#fff',
    borderWidth: 1,
    height: 40,
    fontSize: 18,
    borderColor: '#fff'
  },
  details_key_value: {
    flexDirection: "row",
    alignSelf: 'stretch',
    paddingBottom: 10
  },
  details_block: {
    flexDirection: "column",
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: '#152C52',
  },
  details_key: {
    color: '#152C52',
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    flex: 4
  },
  details_value: {
    color: '#152C52',
    justifyContent: "center",
    alignItems: "center",
    flex: 8,
    paddingRight: 10
  },
  details_not_specified: {
    color: '#B3B6BD',
    justifyContent: "center",
    alignItems: "center",
    flex: 8,
    paddingRight: 10
  },
  login: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#572847',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  lang: {
    marginRight:2,
    paddingLeft:12,
    paddingRight:12,
    height: 20,
    borderStyle: 'solid',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 24,
    borderWidth: 1,
    borderColor: '#152C52'
  },
  card:{
    margin:10,
    marginBottom:0,
    padding:10,
    alignSelf: 'stretch',
    height:100,
    borderWidth: 1,
    borderRadius:20,
    borderStyle: 'solid',
    borderColor: '#152C52',
    flexDirection: 'row',
  }
});