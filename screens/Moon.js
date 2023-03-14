import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
  Linking,
  ScrollView,
} from 'react-native';

export default class MoonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View
            style={{
              flex: 0.15,
              justifyContent: 'center',
              textAlign: 'center',
              padding: 20,
            }}>
            <Text style={styles.titleText}> Moon Phases </Text>
          </View>
          <ScrollView style={styles.listContainer}>
            <View style={{ padding: 20 }}>
              <Image
                source={require('../assets/moonPhases.png')}
                style={{
                  width: '100%',
                  height: 300,
                  borderRadius: 10,
                }}></Image>
            </View>

            <View style={styles.contentCard}>
              <Image
                source={require('../assets/new-moon.jpg')}
                style={styles.itemImage}></Image>
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>
                New Moon
              </Text>
              <Text style={{ color: 'black', fontSize: 13 }}>
                This is the invisible phase of the Moon, with the illuminated
                side of the Moon facing the Sun and the night side facing Earth.
                In this phase, the Moon is in the same part of the sky as the
                Sun and rises and sets with the Sun. Not only is the illuminated
                side facing away from the Earth, it’s also up during the day!
                Remember, in this phase, the Moon doesn’t usually pass directly
                between Earth and the Sun, due to the inclination of the Moon’s
                orbit. It only passes near the Sun from our perspective on
                Earth.
              </Text>
            </View>

            <View style={styles.contentCard}>
              <Image
                source={require('../assets/waxing-crescent.jpg')}
                style={styles.itemImage}></Image>
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>
                Waxing Crescent
              </Text>
              <Text style={{ color: 'black', fontSize: 13 }}>
                This silver sliver of a Moon occurs when the illuminated half of
                the Moon faces mostly away from Earth, with only a tiny portion
                visible to us from our planet. It grows daily as the Moon’s
                orbit carries the Moon’s dayside farther into view. Every day,
                the Moon rises a little bit later.
              </Text>
            </View>

            <View style={styles.contentCard}>
              <Image
                source={require('../assets/first-quarter.jpg')}
                style={styles.itemImage}></Image>
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>
                First Quarter
              </Text>
              <Text style={{ color: 'black', fontSize: 13 }}>
                The Moon is now a quarter of the way through its monthly journey
                and you see half of its illuminated side. People may casually
                call this a half moon, but remember, that’s not really what
                you’re witnessing in the sky. You’re seeing just a slice of the
                entire Moon ― half of the illuminated half. A first quarter moon
                rises around noon and sets around midnight. It’s high in the sky
                in the evening and makes for excellent viewing.
              </Text>
            </View>

            <View style={styles.contentCard}>
              <Image
                source={require('../assets/waxing-gibbous.jpg')}
                style={styles.itemImage}></Image>
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>
                Waxing Gibbous
              </Text>
              <Text style={{ color: 'black', fontSize: 13 }}>
                Now most of the Moon’s dayside has come into view, and the Moon
                appears brighter in the sky.
              </Text>
            </View>

            <View style={styles.contentCard}>
              <Image
                source={require('../assets/full.jpg')}
                style={styles.itemImage}></Image>
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>
                Full Moon
              </Text>
              <Text style={{ color: 'black', fontSize: 13 }}>
                This is as close as we come to seeing the Sun’s illumination of
                the entire day side of the Moon (so, technically, this would be
                the real half moon). The Moon is opposite the Sun, as viewed
                from Earth, revealing the Moon’s dayside. A full moon rises
                around sunset and sets around sunrise. The Moon will appear full
                for a couple of days before it moves into…
              </Text>
            </View>

            <View style={styles.contentCard}>
              <Image
                source={require('../assets/waning-gibbous.jpg')}
                style={styles.itemImage}></Image>
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>
                Waning Gibbous
              </Text>
              <Text style={{ color: 'black', fontSize: 13 }}>
                As the Moon begins its journey back toward the Sun, the opposite
                side of the Moon now reflects the Moon’s light. The lighted side
                appears to shrink, but the Moon’s orbit is simply carrying it
                out of view from our perspective. The Moon rises later and later
                each night.
              </Text>
            </View>

            <View style={styles.contentCard}>
              <Image
                source={require('../assets/third-quarter.jpg')}
                style={styles.itemImage}></Image>
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>
                Last Quarter
              </Text>
              <Text style={{ color: 'black', fontSize: 13 }}>
                The Moon looks like it’s half illuminated from the perspective
                of Earth, but really you’re seeing half of the half of the Moon
                that’s illuminated by the Sun ― or a quarter. A last quarter
                moon, also known as a third quarter moon, rises around midnight
                and sets around noon.
              </Text>
            </View>

            <View style={styles.contentCard}>
              <Image
                source={require('../assets/new-moon.jpg')}
                style={styles.itemImage}></Image>
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>
                Waning Crescent
              </Text>
              <Text style={{ color: 'black', fontSize: 13 }}>
                The Moon is nearly back to the point in its orbit where its
                dayside directly faces the Sun, and all that we see from our
                perspective is a thin curve.
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "rgb(49, 41, 118)"
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  contentCard: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    elevation: 10,
    backgroundColor: 'white',
  },
  itemImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});
