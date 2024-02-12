import React from "react";
import {View, Text, TextInput, TouchableOpacity, Linking} from "react-native";

export default function LoginForm() {
  return (
    <>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Mot de passe" />
        </View>
      </View>
    </>
  );
}

const styles = {
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderWidth: 3,
    borderColor: "#EC5A13",
    paddingLeft: 30,
    marginLeft: 13,
    marginRight: 13,
  },
};
