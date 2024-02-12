import React from "react";
import {View, Image, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

import homeIcon from "./../../assets/icons/Home.png";
import searchIcon from "./../../assets/icons/Search.png";
import Users from "./../../assets/icons/Users.png";

export default function NavbarMobile() {
  const navigation = useNavigation();

  const navigateTo = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
        backgroundColor: "#ffff",
      }}
    >
      <TouchableOpacity onPress={() => navigateTo("home")}>
        <Image
          source={homeIcon}
          style={{backgroundColor: "#ffff", width: 50, height: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo("buy")}>
        <Image
          source={searchIcon}
          style={{backgroundColor: "#ffff", width: 50, height: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo("Login")}>
        <Image
          source={Users}
          style={{backgroundColor: "#ffff", width: 50, height: 50}}
        />
      </TouchableOpacity>
    </View>
  );
}
