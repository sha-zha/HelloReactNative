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

      <View style={styles.blocHedaer}>
          <SafeAreaView>
              <View >
                  <Image source={profile} style={styles.profile} />

              </View>
              <View>
                  <Text>
                      Deuxieme
                  </Text>
              </View>
          </SafeAreaView>
      </View>
  );
}

    const styles = StyleSheet.create({
    blocHedaer : {

        flex : 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',

    },
    profile : {
        borderRadius: 60,
        marginTop:100,
    }

});

export default Home;