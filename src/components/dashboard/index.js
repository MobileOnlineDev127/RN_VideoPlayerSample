//import liraries
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ListView
} from 'react-native';

import Orientation from 'react-native-orientation';

import styles from './styles'
import { connect } from 'react-redux'

import Video from 'react-native-video'

var {height, width} = Dimensions.get('window');


const videos = [
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: '4'},
    {name: '5'},
    {name: '6'},
    {name: '7'},
    {name: '8'},
    {name: '9'},
]

class Dashboard extends Component<{}> {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   

        this.state = {
            dataSource: ds.cloneWithRows(videos),
            pageHeight:height,
            pageWidth:width,
            isPortrait: true ,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            controls: false,
            paused: true,
            skin: 'custom',
            ignoreSilentSwitch: null,
            isBuffering: false,
        };
    }
    componentWillMount() {
        const initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
            this.setState({ isPortrait: true })
        } else {
            this.setState({ isPortrait: false })
        }   
    }

    _onLayout = event => {
        this.setState({
            pageHeight:event.nativeEvent.layout.height,
            pageWidth:event.nativeEvent.layout.width,
        });
    }  

    renderRow(item){
        return(
            <TouchableOpacity >
                <View style = {styles.rowView}>
                    <View style = {styles.line}/>
                    <Image source = {require('../../assets/video_icon.png')} style = {styles.logoImg}/>
                    <Text style = {styles.title} numberOfLines = {1}>James Bond</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _clickToggle = () => {
        const initial = Orientation.getInitialOrientation();
        if (this.state.pageHeight > this.state.pageWidth) {
            Orientation.lockToLandscapeLeft();
            Orientation.unlockAllOrientations();
        } else {
            Orientation.lockToPortrait();
            Orientation.unlockAllOrientations();
        }  

    }

    showVideo() {
        if (this.state.pageHeight > this.state.pageWidth) {
            StatusBar.setHidden(false)
            return(
                <View style = {{flex:1}}>
                    <Video
                        repeat
                        resizeMode='cover'
                        source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                        style = {[styles.fullScreen, { backgroundColor: 'transparent',height: this.state.pageHeight/3, width: this.state.pageWidth}]} 
                    />
                    <TouchableOpacity onPress = {this._clickToggle} style = {[styles.toggleButton, {top: this.state.pageHeight/3-70, right: 30}]}>
                    </TouchableOpacity>
                    <View style = {[styles.adView, {width: this.state.pageWidth}]}/>
                    <ListView 
                        dataSource={this.state.dataSource}
                        renderRow = {this.renderRow.bind(this)}>
                    </ListView>
                </View>
                
            )   
        }
        else {
            StatusBar.setHidden(true)
            return(
                <View style = {{alignItems: 'center' }}>
                    <Video                 
                        repeat
                        resizeMode='cover'
                        source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                        style = {[styles.fullScreen, {backgroundColor: 'transparent',height: this.state.pageHeight, width: this.state.pageWidth}]} 
                    />
                    <TouchableOpacity onPress = {this._clickToggle} style = {[styles.toggleButton, {top: this.state.pageHeight-120, right: 40}]}>
                    </TouchableOpacity>
                    <View style = {[styles.adView, {marginTop:-50, width: this.state.pageWidth/2}]}/>
                </View>
                
            )  
        }
    }

    showVideo1(){
        if (this.state.pageHeight > this.state.pageWidth) {
            StatusBar.setHidden(true)
            return(
                <View style = {{alignItems: 'center' }}>
                    <Video                 
                        repeat
                        resizeMode='cover'
                        source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                        style = {[styles.fullScreen, {backgroundColor: 'transparent',height: this.state.pageWidth, width: this.state.pageHeight}]} 
                    />
                    <TouchableOpacity onPress = {this._clickToggle}>
                        <View style = {[styles.toggleButton, {marginLeft: this.state.pageWidth-100, marginTop: -100}]}/>
                    </TouchableOpacity>
                    <View style = {[styles.adView, {marginTop:-50, width: this.state.pageWidth/2}]}/>
                </View>
                
            )  
        }
        else{
            StatusBar.setHidden(false)
            return(
                <View>
                    <Video                 
                        repeat
                        resizeMode='cover'
                        source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                        style = {[styles.fullScreen, { backgroundColor: 'transparent',height: this.state.pageHeight/3, width: this.state.pageWidth}]} 
                    />
                    <TouchableOpacity onPress = {this._clickToggle}>
                        <View style = {[styles.toggleButton, {marginLeft: this.state.pageWidth-70}]}/>
                    </TouchableOpacity>
                    <View style = {[styles.adView, {width: this.state.pageWidth}]}/>
                    <ListView 
                        dataSource={this.state.dataSource}
                        renderRow = {this.renderRow.bind(this)}>
                    </ListView>
                </View>
                
            )   
        }
    }

    render() {  
        return (
            <View style={styles.container} onLayout={this._onLayout}>
                {this.showVideo() }            
            </View>
        );
    }
}

//make this component available to the app
export default Dashboard;