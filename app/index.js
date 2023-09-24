import { useState } from "react";
import { View, Button, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { 
    SIZES, COLORS, icons, images
 } from "../constants";

import { 
     Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
 } from "../components"


const Home = () => {
const route = useRouter()

    return ( 
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }} >
    
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.primary },
                        headerShadowVisible: false,
                         headerLeft: ()=>(
                            <ScreenHeaderBtn iconUrl = {icons.menu} dimension ="60%" />
                
                        ),
                        headerRight: ()=>(
                            <ScreenHeaderBtn iconUrl = {images.profile} dimension ="100%" />
                        ),
                        headerTitle: "",
                    }}
                />

                <ScrollView showsVerticalScrollIndicator={false} >
                    <View 
                        style={{
                            flex: 1,
                            padding: SIZES.medium
                        }}
                    >
                            <Welcome />
                            <Popularjobs />
                            <Nearbyjobs />
                    </View>
                </ScrollView>
               
        </SafeAreaView>
                
     );
}
 
export default Home;