import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import HomeScreen from './HomeScreen';

const DetailScreen = ({navigation}) => {
  const [oneId, setOneId] = useState();
  const [avatar, setAvatar] = useState('');
  const [detail, setDetail] = useState('');
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  return (
    <ScrollView style={styles.body}>
      <View style={styles.viewContainer}>
          {/* <HomeScreen
            {...{oneId,setOneId}}
          />
          {console.log(oneId)} */}
        {/* 
            Avatar, Name Surname, Job, About kısımları burada gösterilecek sırayla ve alt alta hepsi centerda.
            */}
        <Image
          style={styles.imageAlign}
          source={{
            uri: 'https://static.wikia.nocookie.net/simpsons/images/1/12/Abbey_Tapped_Out.png',
          }}
        />
      </View>
      <View style={styles.nameJob}>
        <Text style={styles.txt}>Abbey</Text>
        <Text style={styles.txt}>Retired</Text>
      </View>
      <View>
        <Text style={styles.detailTxt}>
          Abbey is the daughter of Edwina, a woman with whom Abraham Simpson
          briefly had a relationship while he was stationed in England during
          World War II. It is insinuated that Abbey is the result of that
          relationship, which would make her Abe's daughter and Homer's
          half-sister. She very much looks and acts similar to Homer.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    body:{
        backgroundColor:'gray',
    },
  viewContainer: {
    height: 250,
    width: 250,
  },
  imageAlign: {
    resizeMode: 'stretch',
    marginLeft: 70,
    height: '100%',
    width: '100%',
    margin: 20,
  },
  nameJob: {
    alignItems: 'center',
    paddingTop: 50,
  },
  txt: {
    fontSize: 24,
    color: 'black',
  },
  detailTxt:{
      fontSize:16,
      fontWeight:'400',
  },
});

export default DetailScreen;
