import React,{useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

const Search= () => {
  const [state, setState] = useState({
    textEntered:"",
    apiResponse: ""
})
  useEffect(()=>{
    if(state.textEntered){
      var requestOptions = {
      method: 'GET',
      redirect: 'follow'
      };
      fetch(`https://api.agify.io/?name=${state.textEntered}`, requestOptions)
      .then(async(response) => {
        if(response && response.status == 200){
          response.json().then(data => {
            setState({... state, apiResponse: data})
          })
        }
        else
          alert("Something went wrong")
      }).catch(error => alert("Error, Something went wrong"));
    }else
      setState({... state, apiResponse: ""})
  },[state.textEntered])

  const renderItem = ({item, index}) => {
    return (
        <View style={{alignItems: 'center'}} key={index}>
          {item ? <Text>{item}</Text> : null}
        </View>
    )
}

  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInput
        style={styles.input}
        placeholder={"Enter text to search"}
        onChangeText={(text) => setState({... state, textEntered: text})}
      />
      {state.apiResponse ?
        <FlatList
            data={Object.values(state.apiResponse)}
            renderItem={renderItem}
            style={{ margin: 2 }}
        />
      : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea:{
    marginHorizontal: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 30,
    borderRadius: 20
  },
});

export default Search;