import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";

export default function RandomColor() {
  const [newColor, setNewColor] = useState([]);

  const colorGenerate = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  console.log(newColor);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.btnFlex}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            setNewColor([...newColor, colorGenerate()]);
          }}
        >
          <Text style={styles.textStyle}>Generate Color</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rsBtn}
          onPress={() => {
            setNewColor([]);
          }}
        >
          <Text style={styles.textStyle}>Reset</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={newColor}
        renderItem={({ item }) => {
          return (
            <View style={styles.imgContainer}>
              <View
                style={{
                  backgroundColor: item,
                  width: "100%",
                  height: 100,
                  borderRadius: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Text style={styles.textStyle}>{item}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    alignItems: "center", // added for centering
  },
  buttonStyle: {
    backgroundColor: "green",
    overflow: "hidden",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    // textTransform: "uppercase",
    fontSize: 20,
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 30,
    width: "100%",
    fontWeight: "bold",
  },
  btnFlex:{
    display: "flex",
  },
  rsBtn:{
    marginTop:2,
    backgroundColor: "red",
    overflow: "hidden",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  }
});
