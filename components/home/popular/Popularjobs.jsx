import { React, useState } from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from "../../common/cards/popular/PopularJobCard"


const Popularjobs = () => {
  const isLoading = false;
  const error = false;

  const totalNumber = [1, 2, 3, 4, 5]

  return (
    <View style={styles.container} >
      <View style={styles.header} >
          <Text style={styles.headerTitle} >Popular jobs</Text>
          <TouchableOpacity>
              <Text style={styles.headerBtn} >Show all</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer} >
          {isLoading ? (
              <ActivityIndicator colors={COLORS.primary} size = "large" />
          ) : error ? (
            <Text>Something is wrong my g</Text>
          ) : (
            <FlatList 
                data = {totalNumber}
                renderItem={({item}) => (
                  <PopularJobCard
                   item={item} 
                  />
                )}  
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{columnGap: SIZES.medium}}
                horizontal
              />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs