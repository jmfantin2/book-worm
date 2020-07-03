import React, { useState, useEffect } from "react";
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
  const [isIsAddingNewBook, setIsAddingNewBook] = useState(false);
  const [textInputEntry, setTextInputEntry] = useState("");
  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState({ author: "", publisher: "" });

  const [totalCount, setTotalCount] = useState(0);
  const [readingCount, setReadingCount] = useState(0);
  const [readCount, setReadCount] = useState(0);

  useEffect(() => {
    console.log("\nDATA UPDATE: [books]");
    console.log("books: " + books);
    console.log(
      "bookData: {" + bookData.author + ", " + bookData.publisher + "}"
    );
    console.log("totalCount: " + totalCount);
    console.log("readingCount: " + readingCount);
    console.log("readCount: " + readCount);
  }, [books]);

  function addBook() {
    const alreadyInList = books.find(function (bk) {
      return bk === textInputEntry;
    });
    if (!alreadyInList) {
      setBooks([...books, textInputEntry]);
      setBookData({ author: "JM Fantin", publisher: "Tocha" });
      setTotalCount(totalCount + 1);
      setReadingCount(readingCount + 1);
    } else {
      alert("Book already added");
    }
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
        {isIsAddingNewBook && (
          <View style={{ height: 50, flexDirection: "row" }}>
            <TextInput
              value={textInputEntry}
              style={{ flex: 1, backgroundColor: "#ececec", paddingLeft: 5 }}
              onChangeText={(text) => {
                setTextInputEntry(text);
              }}
              placeholder={textInputEntry ? null : "Enter book name :)"}
              placeholderTextColor="#999"
            />
            <TouchableOpacity onPress={() => setTextInputEntry("")}>
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
            setIsAddingNewBook(!isIsAddingNewBook);
          }}
          style={{ position: "absolute", bottom: 20, right: 20 }}
        >
          <Ionicons
            name={isIsAddingNewBook ? "ios-remove-circle" : "ios-add-circle"}
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
