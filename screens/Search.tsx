import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React, { useState } from 'react'

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [errorSearch, setErrorSearch] = useState("");
  const hardleSearch = async () => {
    try {
      const res: any = await signIn({
        email: email,
      });
      console.log('res token', res);
      if (res.message === 'success') {
        AsyncStorage.setItem('token', res.token);
        setLoggedIn(true);
        console.log('token kkkkkkkkkk');
        navigation.replace('MainStack', {screen: 'Home'});
      }
    } catch (err:any) {
      setErrorSearch('');
      err.errors.map( (item:any) => {
        if(item.param === 'email'){
          setErrorsEmail(item.msg);
        } else if(item.param === 'password'){
          setErrorsPassword(item.msg);
        }
      })
    }
  };
  return (
    <View>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        back
      </Button>
      <TextInput
        label="Search"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Search
      </Button>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})