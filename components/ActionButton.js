import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { PropTypes } from "prop-types";

const ActionButton = ({ children, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[custom.button, style]}>{children}</View>
  </TouchableOpacity>
);

const custom = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },
});

ActionButton.propTypes = {
  children: PropTypes.element,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default ActionButton;
