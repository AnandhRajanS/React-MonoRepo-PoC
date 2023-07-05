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
  Section: {
    ...Platform.select({
      android: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginTop: 75,
        marginLeft: 140,
        fontSize:25,
        color:"#121C84",
        fontWeight:"bold",
        marginBottom:40
        
      },
      default: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 2,
        marginBottom: 25,
        marginLeft:500,
        fontSize:30,
        color:"#121C84",
        fontWeight:"bold",
        marginBottom:20
      },
    }),
  },
  DescriptionHead: {
    ...Platform.select({
      android: {
        //marginLeft: 90,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        color:"#561139",
        fontSize:18,
        fontWeight:"bold",
        marginBottom:10,
        marginLeft:80,
        
      },
      default: {
        marginLeft: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 2,
        marginBottom: 25,
        color:"#561139",
        fontSize:20,
        fontWeight:"bold",
        marginLeft:500,
      },
    }),
  },
  DescriptionContent: {
    ...Platform.select({
      android: {
        marginBottom:10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        color:"black",
        marginRight:10,
        fontSize:16
      },
      default: {
        marginLeft: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 2,
        marginBottom: 25,
        color:"black",
        marginRight:10,
        fontSize:16
      },
    }),
  },
  Name: {
    ...Platform.select({
      android: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginTop: 2,
        marginLeft: 50,
        fontSize:18,
        color:"blue",
        fontWeight:"bold",
        marginBottom:20
      },
      default: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 2,
        marginBottom: 25,
        marginLeft: 50,
        fontSize:18,
        color:"blue",
        fontWeight:"bold",
      },
    }),
  },
  Price: {
    ...Platform.select({
      android: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginTop: 2,
        marginLeft: 50,
        fontSize:18,
        color:"red",
        fontWeight:"bold",
        marginBottom:20
      },
      default: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 2,
        marginBottom: 25,
        marginLeft: 50,
        fontSize:18,
        color:"red",
        fontWeight:"bold",
      },
    }),
  },
  Button: {
        ...Platform.select({
          android: {
            backgroundColor: "black",
            borderWidth: 3,
            width: "50%",
            height: 50,
            marginLeft: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            marginTop: 2,
            marginLeft: 120,
            marginBottom: 20,
          },
          default: {
            backgroundColor: "black",
            borderWidth: 5,
            width: "28%",
            height: 50,
            marginLeft: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginTop: 2,
            marginBottom: 25,
          },
        }),
      },
          Charts: {
    justifyContent: "center",
    color: "white",
    fontSize:18,
    paddingRight:50

  },
});


export default styles;


