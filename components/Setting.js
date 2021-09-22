import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import colors from "../assets/colors/colors";



const Setting = (navigation) => {
    return (
        <View style={styles.divCenter}>
            <Text style={styles.textOrange}>Settings Components !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   divCenter : {
       flex:1,
       justifyContent:'center',
       alignItems :'center',
   },
    textOrange : {
       color : colors.orange,
    }
})


export default Setting;