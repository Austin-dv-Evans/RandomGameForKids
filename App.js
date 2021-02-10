import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState("Austin")
  const [thing, setThing] = useState("Boogers")
  const [bgColor, setbgColor] = useState("#ff0000")

  const nameArray = ["Austin", "Renee", "Luna", "Robbie", "Jeanie", "Stella", "Chrissy", "Dominique", "Bobby", "Chrissy", "Woody", "Jerry"]
  const thingArray = ["Boogers", "Poop", "Unicorns", "Farts", "Onion Breath", "Leaky Butthole", "Pee Pee", "Rainbows", "Butterflys", "Dirty Diapers", "Toe Nails", "Licking Feet"]

  const colorArray = ["#ff0000", "#ffa500", "#ffcc00", "#0000ff", "#4b0082", "#ee82ee", "#008000"]

  const handleClick = () => { 
    setName(nameArray[Math.floor(Math.random()*nameArray.length)])
    setThing(thingArray[Math.floor(Math.random()*thingArray.length)])
    setbgColor(colorArray[Math.floor(Math.random()*colorArray.length)])
  }

  return (
    <View style={styles.container, {backgroundColor: bgColor}} >
      <View style={styles.container}><Text style={styles.text}>{name}</Text></View>
      <View style={styles.container}><Text style={styles.text}>likes</Text></View>
      <View style={styles.container}><Text style={styles.text}>{thing}</Text></View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Button" 
          style={styles.button}
          color="#0000ff" 
          onPress={handleClick} {...[styles.container, {backgroundColor: bgColor}]}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 125,
    padding: 30,

    justifyContent: 'center',
    position: 'relative'
  },
  text:{
    color: "white",
    margin: 0,
    position: 'absolute',
    fontSize: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    display: "flex",
    flex: -1,
    padding: 20,
    marginTop: 150,
    margin: "10%",
    alignItems: "center",
    backgroundColor: 'black',
    borderRadius: 10,
  },
  button: {
    fontSize: 40,
    borderRadius: 10,
  }
});
