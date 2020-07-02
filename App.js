import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";

import BookCount from "./components/BookCount";

export default function App() {
  const [addingNewBook, setAddingNewBook] = useState(false);
  const [newBookName, setNewBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [readingCount, setReadingCount] = useState(0);
  const [readCount, setReadCount] = useState(0);

  function addBook() {
    const alreadyInList = books.find(function (bk) {
      return bk === newBookName;
    });
    if (!alreadyInList) {
      setBooks([...books, newBookName]);
      setTotalCount(totalCount + 1);
      setReadingCount(readingCount + 1);
    } else {
      alert("Book already added");
    }
    console.log(books);
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
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
      <View style={{ flex: 1 }}>
        {addingNewBook && (
          <View style={{ height: 50, flexDirection: "row" }}>
            <TextInput
              value={newBookName}
              style={{ flex: 1, backgroundColor: "#ececec", paddingLeft: 5 }}
              onChangeText={(text) => {
                setNewBookName(text);
              }}
              placeholder={newBookName ? null : "Enter book name :)"}
              placeholderTextColor="#999"
            />
            <TouchableOpacity onPress={() => setNewBookName("")}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#dab",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="delete" color="white" size={26} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addBook()}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#adb",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-checkmark" color="white" size={40} />
              </View>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            setAddingNewBook(!addingNewBook);
          }}
          style={{ position: "absolute", bottom: 20, right: 20 }}
        >
          <Ionicons
            name={addingNewBook ? "ios-remove-circle" : "ios-add-circle"}
            color="#abd"
            size={60}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 70,
          backgroundColor: "#fafafa",
          borderTopWidth: 0.5,
          borderTopColor: "#F99",
          flexDirection: "row",
        }}
      >
        <BookCount title="Total" count={totalCount} />
        <BookCount title="Reading" count={readingCount} />
        <BookCount title="Read" count={readCount} />
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
