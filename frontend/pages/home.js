import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToAcheter = () => {
    navigation.navigate('buy');
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: '#EC5A13', fontSize: 24, fontWeight: 'bold', marginTop: 50, marginLeft: 20 }}>TRINDED</Text>
      {/* Section principale */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '90%', marginBottom: 20 }}>
          <Text style={{ textAlign: 'center' }}>Explorez notre brocante virtuelle.</Text>
          <TouchableOpacity onPress={goToAcheter} style={{ backgroundColor: '#EC5A13', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Acheter</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '90%', marginBottom: 20 }}>
          <Text style={{ textAlign: 'center' }}>Donnez une seconde vie à vos vêtements.</Text>
          <TouchableOpacity style={{ backgroundColor: '#EC5A13', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Vendre</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{ width: '90%', height: 200 }}
          source={require('./../assets/home-image.png')}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
