import React, { useState } from "react";
import { View, Text } from "react-native";

export default function BookCount(props) {
  const [totalCount, setTotalCount] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18 }}>{props.title}</Text>
      <Text>{props.count}</Text>
    </View>
  );
}
