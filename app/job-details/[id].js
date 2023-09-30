
import { React, useCallback, useState } from "react";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router"

import { 
    View,
    Text,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
    RefreshControl
} from "react-native";

// local imports
import { ScreenHeaderBtn, JobAbout, Company, JobFooter, Specifics, JobTabs } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";



const JobDetails = () => {
    const params = useGlobalSearchParams();
    const router = useRouter();

    const {isLoading, data, error, refetch} = useFetch("job-details", {
            job_id: params.id
    })

        const [refreshing, setRefreshing] = useState(false)

        
        const onRefresh = () => {}

    return ( 
            
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }} >
    
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.lightWhite },
                        headerBackVisible: false,
                        headerShadowVisible: false,
                         headerLeft: ()=>(
                            <ScreenHeaderBtn iconUrl = {icons.left} dimension ="60%" handlePress={ () => router.back() } />
                
                        ),
                        headerRight: ()=>(
                            <ScreenHeaderBtn  iconUrl = {icons.share} dimension ="60%" />
                        ),
                        headerTitle: "",
                    }
                }
                />

                <>
                    <ScrollView showsVerticalScrollIndicator={false}
                     refreshControl={
                     <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                      }
                    >
                        {isLoading ? (
                            <ActivityIndicator size="large" color={COLORS.primary} />
                        ) : error ? (
                            <Text>Something is definelty not right!</Text>
                        ) : data.length === 0 ? (
                            <Text> no data fam!</Text>
                        ) : (
                            <View style={{padding : SIZES.medium, paddingBottom: 100}} >
                                    <Company 
                                        companyLogo={data[0].employer_logo}
                                        jobTitle={data[0].job_title}
                                        companyName={data[0].employer_name}
                                        location={data[0].job_country}
                                    />

                                    <JobTabs 
                                    
                                    />
                            </View>
                        )
                    }
                    </ScrollView>
                </>

               
        </SafeAreaView>
               
     );


}
 
export default JobDetails;


