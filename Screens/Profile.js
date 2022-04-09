import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import Constants  from 'expo-constants';
import GlobalContext from '../context/Context';
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Profile() {
    const [displayName, setDisplayName] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);

    const {theme: {colors}} = useContext(GlobalContext)
  return (
      <React.Fragment>
          <StatusBar style='auto'/>
          <View
            style={{
                alignItems:'center',
                justifyContent:'center',
                flex:1,
                paddingTop: Constants.statusBarHeight + 20,
                padding: 20
            }}
          >
            <Text style={{fontSize: 22, color: colors.foreground}}>
                Profile info
            </Text>
            <Text style={{fontSize: 14, color: colors.text, marginTop: 20 }}> 
                Please provide your name and an optional profile photo 
            </Text>
            <TouchableOpacity 
                style={{ 
                    marginTop: 30, 
                    borderRadius: 120, 
                    width: 120, 
                    height: 120,
                    backgroundColor: colors.background,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {!selectedImage ? (
                    <MaterialCommunityIcons
                        name='camera-plus'
                        color={colors.iconGray}
                        size={45} 
                    />
                ) : (
                    <Image
                        source={{url: selectedImage}}
                        style={{ width: '100%', height: '100%', borderRadius:120 }}
                    />
                )}
            </TouchableOpacity>
            <TextInput
                placeholder="Type your name"
                value={displayName}
                onChangeText={setDisplayName}
                style={{
                    borderBottomColor: colors.primary,
                    marginTop: 40,
                    borderBottomWidth: 2,
                    width: "100%",
                }}
        />
          </View>
      </React.Fragment>
  )
}