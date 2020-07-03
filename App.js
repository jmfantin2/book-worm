import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ActionButton from "./components/ActionButton";
import FloatingAdd from "./components/FloatingAdd";

export default function App() {
  const [isAddingNewBook, setIsAddingNewBook] = useState(false);
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
      setIsAddingNewBook(false);
    } else {
      alert("Book already added");
    }
  }

  function markAsRead(selectedBook, index) {
    let newList = books.filter((book) => book !== selectedBook);
    setBooks(newList);
    setReadingCount(readingCount - 1);
    setReadCount(readCount + 1);
  }

  function renderBookEntry(item, index) {
    return (
      <View style={{ height: 50, flexDirection: "row" }}>
        <View style={{ flex: 1, justifyContent: "center", paddingLeft: 5 }}>
          <Text>{item}</Text>
        </View>
        <ActionButton
          style={{ backgroundColor: "#abd", width: 100 }}
          onPress={() => markAsRead(item, index)}
        >
          <Text style={{ fontWeight: "bold", color: "#fff" }}>
            Mark as Read
          </Text>
        </ActionButton>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <Header />
      <View style={{ flex: 1 }}>
        {isAddingNewBook && (
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
            <ActionButton
              style={{ backgroundColor: "#dab" }}
              onPress={() => setTextInputEntry("")}
            >
              <Feather name="delete" color="white" size={26} />
            </ActionButton>
            <ActionButton
              style={{ backgroundColor: "#adb" }}
              onPress={() => addBook()}
            >
              <Ionicons name="ios-checkmark" color="white" size={40} />
            </ActionButton>
          </View>
        )}
        <FlatList
          data={books}
          renderItem={({ item }, index) => renderBookEntry(item, index)}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <View style={{ marginTop: 50, alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", color: "#999", fontSize: 20 }}>
                Not reading any books
              </Text>
            </View>
          }
        />
        <FloatingAdd
          onPress={() => {
            setIsAddingNewBook(!isAddingNewBook);
          }}
          toggle={isAddingNewBook}
        />
      </View>
      <Footer total={totalCount} reading={readingCount} read={readCount} />
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
