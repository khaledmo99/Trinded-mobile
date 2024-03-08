import React from "react";
import {View, Text, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

export default function Acheter() {
  return (
    <>
      <View style={styles.textContainer}>
        <Text>Filtrer par catégorie</Text>
      </View>
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity>
          <View style={styles.threeCategory}>
            <TouchableOpacity style={styles.categoryItem}>
              <Text>Homme</Text>
              <Image
                source={require("./../public/images/man-image.png")}
                style={styles.categoryImg}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryItem}>
              <Text>Femme</Text>
              <Image
                source={require("./../public/images/woman-image.png")}
                style={styles.categoryImg}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryItem}>
              <Text>Enfant</Text>
              <Image
                source={require("./../public/images/kids-image.png")}
                style={styles.categoryImg}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = {
  textContainer: {
    padding: 15,
    marginBottom: 15,
  },
  threeCategory: {
    flexDirection: "column",
    justifyContent: "space-beetween",
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryImg: {
    width: 200,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
};
