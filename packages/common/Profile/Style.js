import { StyleSheet, Platform,Dimensions} from 'react-native';


const styles = StyleSheet.create({
  container:{
    paddingBottom:20
  },
  header: {
    backgroundColor: "#f55742",
    justifyContent: 'space-evenly',
  },

  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  cam: {
    color:'darkblue',
    borderWidth:2,
    borderRadius:10,
    padding:5,
    paddingLeft:10,
    paddingRight:10,
    borderColor:'darkblue',
    backgroundColor:'lightblue',
    margin:5,
  },

  camcontainer: {
    flexDirection:'row',
    margin:5,
  },
  name: {
    fontSize: 22,
    color: "white",
    fontWeight: "600",
    textTransform:'uppercase',
  },

  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    alignContent:"center",
    alignItems:"center",
  },
  infoContent: {
    flex: 1,
    flexDirection:"row",
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  
  infoMain:{
    fontSize: 20,
    marginTop: 20,
    color:"#f55742",
    // paddingLeft:10,
  },

  info: {
    ...Platform.select({
      android: {
        fontSize: 20,
        marginTop: 20,
        color: "black",
        paddingLeft: 10,
      },
      default: {
        fontSize: 20,
        marginTop: 20,
        color: "black",
        paddingLeft: 10,
      },
    }),
  },
  logout: {
    ...Platform.select({
      android: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 48,
        backgroundColor: "#f2bb07",
      },
      default: {
        width: "40%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 60,
        backgroundColor: "#f2bb07",
        
      },
    }),
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
  },
  home: {
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 24,
    backgroundColor: "#f2bb07",
  },
  navbar:{
    backgroundColor: "#513252",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  navbarImage: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
  navbarIcon: {
    paddingRight: 16,
  },
  navbarText: {
    fontWeight: 'bold',
    color: '#f2bb07',
    padding: 16,
  },
  navbarTab: {
    flexDirection:'row',
    alignSelf:'flex-end',
  },
  navbarSelectedTab: {
    fontWeight: 'bold',
    color: "#ffd954",
    padding: 16,
  },
});


export default styles;


