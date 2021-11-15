import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class StoryCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.profileImage}></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.postAuthorText}>
                {this.props.story.author}
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}></Image>
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.story.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={'heart'} size={RFValue(30)}></Ionicons>
              <Text style={styles.likeText}>12K</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  authorContainer: {
    flex:1
  },
  authorImageContainer: {
    justifyContent:'center',
    alignItems:'left'
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius:30,
    marginLeft:10
  },
  authorNameContainer:{
    justifyContent:'center',
    alignItems:'right'
  },
  postAuthorText:{
    color:'white',
    marginLeft:50,
    marginBottom:10,
    marginTop: -25
  },
  postImage: {
    resizeMode: 'contain',
    width: '90%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  captionContainer:{
    flex:1
  },
  captionText:{
    color:'gold',
    marginLeft:10
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
