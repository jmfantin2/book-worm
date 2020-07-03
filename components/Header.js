import React from "react";
import { View, Text } from "react-native";

const Header = () => (
  <View
    style={{
      height: 100,
      backgroundColor: "#fafafa",
      borderBottomWidth: 0.5,
      borderBottomColor: "#bbb",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 30,
    }}
  >
    <Text style={{ fontSize: 24 }}>Book Worm</Text>
  </View>
);

export default Header;
