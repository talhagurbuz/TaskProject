import React, { useState, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import axios from 'axios'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const HomeScreen = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        data();
    }, [])
    const data = async () => {
        await axios
            .get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
            .then(function (response) {
                // handle success
                console.log(JSON.stringify(response.data));
                setAllData(...response.data)
                console.log(response.data[0].id)
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            });
    }
    return (
        <ScrollView>
            {/* 
                id
                name
                avatar
                about
                buraya yazılacak apiden çekilip...
            */}
            <View>
                <Image source={{ uri: allData.avatar }} />
                <Text> {allData.name} </Text>
                <Icon name='rowing' />
            </View>
            <FlatList
                data={[{ key: allData.id }]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
            <Text>{allData.name}</Text>
            <Image style={{ height: 150, width: 150, marginTop: 20 }}
                source={{
                    uri: allData.avatar,
                }}
            />

            <Button onPress={data} title='Click Here'></Button>
        </ScrollView>
    )
}

export default HomeScreen
