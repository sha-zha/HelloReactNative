import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    ImageBackground,
    Button
} from 'react-native';


import {SafeAreaView} from 'react-native-safe-area-context';
import profile from '../assets/images/person.png';

const Home = (navigation) => {
  return (

      <View>
          <SafeAreaView>
              <ScrollView>
                  <View  style={styles.blocHedaer}>
                      <Text> menu</Text>
                      <Image source={profile} style={styles.profile} />

                  </View>
              </ScrollView>

          </SafeAreaView>
      </View>
  );
}

    const styles = StyleSheet.create({
    blocHedaer : {

        display : 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: '100%',
    },
    profile : {
        borderRadius: 60,
        marginTop:30
    }

});

export default Home;