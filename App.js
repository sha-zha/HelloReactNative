import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, ScrollView, Text, View} from 'react-native';

export default App = () => {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState([]);


    const getUsers = async () => {
        try {
            const response = await fetch('https://app-planning-cda.herokuapp.com/api/user/exam?token=0ab80d1e2c28465638c3b3a4b34c6ad9');
            const json = await response.json();
            setUser([json.data]);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers();


    }, []);

    return isLoading ? (
        <ActivityIndicator />
    ) : (
        <>
            {user?.map((user, index) => {
                return <View key ={index}>
                    <Text> {user.id} </Text>
                    <Text> {user.email} </Text>


                </View>;
            })}
        </>
    );
};