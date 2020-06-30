import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <View
        style={{
          height: 100,
          backgroundColor: "#fafafa",
          borderBottomWidth: 0.5,
          borderBottomColor: "#F99",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <Text style={{ fontSize: 24 }}>Book Worm</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={{
          height: 70,
          backgroundColor: "#fafafa",
          borderTopWidth: 0.5,
          borderTopColor: "#F99",
          flexDirection: "row",
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 18 }}>Total</Text>
          <Text>0</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 18 }}>Reading</Text>
          <Text>0</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 18 }}>Read</Text>
          <Text>0</Text>
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
