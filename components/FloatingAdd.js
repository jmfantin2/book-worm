import React from "react";
import { TouchableOpacity } from "react-native";
import { PropTypes } from "prop-types";

import { Ionicons } from "@expo/vector-icons";

const FloatingAdd = ({ onPress, toggle }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ position: "absolute", bottom: 20, right: 20 }}
  >
    <Ionicons
      name={toggle ? "ios-remove-circle" : "ios-add-circle"}
      color="#abd"
      size={60}
    />
  </TouchableOpacity>
);

FloatingAdd.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default FloatingAdd;
