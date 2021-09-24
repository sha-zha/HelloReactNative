import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
import styles from "../styles";

export default Home = () => {

    const [user, setUser] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('https://app-planning-cda.herokuapp.com/api/user/exam?token=0ab80d1e2c28465638c3b3a4b34c6ad9');
            const json = await response.json();
            setUser([json.data]);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUsers();

    }, []);

    return  (

        <>
            {user.map( function (user, index){

                return <View key ={index} style={styles.container}>
                    <Text> {user.id} </Text>
                    <Text> {user.email} </Text>
                    <Text>{user.promotion.id}</Text>
                    <Text> {user.exam.label} </Text>

                    {
                        user.exam.map(function (exams) {

                            //faire le return du deuxième objet sinon ça ne s'affiche pas
                            return exams.activities.map(

                                function (act, id) {

                                    return <View key={id}>
                                        <Text>
                                            {act.exam}
                                        </Text>
                                    </View>
                                })

                        })
                    }
                </View>;

            })
            }



        </>
    );
};