import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'



const TabButton = ({name, activeTab, onHandleSearchType}) => (
  <TouchableOpacity style={styles.btn(name, activeTab)} >
          <Text style={styles.btnText(name, activeTab)} >{name}</Text>
    </TouchableOpacity>
)

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  // console.log(tabs)
  return (

    <View style={styles.container} >
        <FlatList
            data={tabs}
            renderItem={({ item }) => (
              <TabButton
                name={item}
                activeTab={activeTab}
                onHandleSearchType={() => setActiveTab(item)}
              />
            )}
            keyExtractor={tabs => tabs?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />

    </View>
  )
}

export default Tabs