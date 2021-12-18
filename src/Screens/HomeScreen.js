import React, {useState, useEffect} from 'react';
import {Svg, Path, SvgUri} from 'react-native-svg';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
import {Button} from 'react-native-paper';
const HomeScreen = ({navigation}) => {
  const [allData, setAllData] = useState([]);
  const [oneId, setOneId] = useState();
  useEffect(() => {
    data();
  }, []);
  const getIdDetail = (id) => {
    setOneId(id);
    console.log(oneId);
    navigation.navigate('DetailScreen', {name:'Detay Sayfası'});
  }
  const data = async () => {
    await axios
      .get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(JSON.stringify(response.data));
        setAllData(response.data);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };
  return (
    <ScrollView>
      {/* 
                id
                name
                avatar
                about
                buraya yazılacak apiden çekilip...
            */}
      {allData.map(a => {
        return (
          <View key={a.id} style={styles.viewContainer}>
            <TouchableOpacity
              onPress={()=>getIdDetail(a.id)}
              style={styles.viewTouchable}>
              <Image style={styles.imageAlign} source={{uri: a.avatar}} />
              <Text style={styles.txt}> {a.name} </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../assets/icons8-delete-50.png')}
              />
            </TouchableOpacity>
          </View>
        );
      })}
      <Button style={styles.buttonAlign} mode="contained">
        Click Here
      </Button>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 30,
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageAlign: {
    resizeMode: 'stretch',
    height: 25,
    width: 25,
    margin: 5,
  },
  txt: {
    fontSize: 20,
    fontWeight: '500',
  },
  buttonAlign: {
    borderRadius: 100,
    borderWidth: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
    left: '35%',
  },
  viewTouchable: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default HomeScreen;
