import React from "react";
import { View } from "react-native";

import BookCount from "./BookCount";

const Footer = (props) => (
  <View
    style={{
      height: 70,
      backgroundColor: "#fafafa",
      borderTopWidth: 0.5,
      borderTopColor: "#F99",
      flexDirection: "row",
    }}
  >
    <BookCount title="Total" count={props.total} />
    <BookCount title="Reading" count={props.reading} />
    <BookCount title="Read" count={props.read} />
  </View>
);

export default Footer;
