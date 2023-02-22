import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React from 'react'

const Search = () => {
  const [text, setText] = React.useState("");
  return (
    <View>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})