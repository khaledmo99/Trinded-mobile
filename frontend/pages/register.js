import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import RegisterForm from "./../components/AuthForms/RegisterForm";

export default function Register() {
  const navigation = useNavigation();

  const goToLoginPage = () => {
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
      }}
    >
      <View style={{marginTop: 150}}>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>
          Inscrivez<Text style={{color: "#EC5A13"}}>.</Text>
        </Text>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>
          Explorez<Text style={{color: "#EC5A13"}}>.</Text>
        </Text>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>
          Economisez<Text style={{color: "#EC5A13"}}>.</Text>
        </Text>
      </View>
      <RegisterForm style={{width: "80%", alignItems: "center"}} />
      <TouchableOpacity
        onPress={goToLoginPage}
        style={{
          marginTop: 20,
          backgroundColor: "#EC5A13",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{color: "#FFFFFF"}}>Vous avez déjà un compte ?</Text>
      </TouchableOpacity>
    </View>
  );
}
