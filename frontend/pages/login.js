import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginForm from './../components/AuthForms/LoginForm';

export default function Login() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ marginTop:150 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Connectez<Text style={{ color: '#EC5A13' }}>.</Text>
          </Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Explorez<Text style={{ color: '#EC5A13' }}>.</Text>
          </Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Economisez<Text style={{ color: '#EC5A13' }}>.</Text>
          </Text>
        </View>
        <LoginForm style={{ width: '80%', alignItems: 'center' }} />
      </View>
    );
  }