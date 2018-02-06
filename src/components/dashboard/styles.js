import {
    Dimensions,
  } from 'react-native';
var {height, width} = Dimensions.get('window');

export default{
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    genre:{
        color: 'black',
        fontSize: 17,
        textAlign: 'left',
        paddingLeft: 15
    },
    fullScreen: {
        width: width,
        height: height*0.3,
        zIndex: 0
    },
    adView: {
        width:width,
        height: 50,
        backgroundColor: 'yellow',
    },
    rowView: {
        flex: 1,
        padding: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    line: {
        width: width,
        height: 1,
        backgroundColor: 'lightgray',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    logoImg: {
        width: 50,
        height: 40,
        resizeMode: 'contain'
    },
    title: {
        color: 'black',
        fontSize: 15,
        marginLeft: 15
    },
    toggleButton: {
        backgroundColor: 'red',
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 25,      
        position: 'absolute'
    }

}