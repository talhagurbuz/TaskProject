import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
const CreateScreen = () => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [about, setAbout] = useState('')
    const [image, setImage] = useState('')

  return (
    <View>
      {/* 
                burada 
                Name Surname tek input
                Job Title tek input
                About Him/Her tek input
                Image Link tek input
                Add Character button
            */}
      <TextInput label="Name Surname" style={styles.txtInput} />       
      <TextInput label="Job" style={styles.txtInput} />
      <TextInput label="About Him/Her" style={styles.txtInput} />
      <TextInput label="Image Link" style={styles.txtInput} />
      <Button mode="contained">Add Character</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  txtInput: {
      borderColor:'gray',
    backgroundColor:'white',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
  },
});

export default CreateScreen;
