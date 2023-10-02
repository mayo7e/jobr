import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import{Specifics} from "../../../components"
import { SIZES } from '../../../constants'



const TabButton = ({name, activeTab, onHandleSearchType}) => (
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
          <Text style={styles.btnText(name, activeTab)} >{name}</Text>
    </TouchableOpacity>
)

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  // console.log(tabs)

 const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return <Specifics 
                    title= "Qualifications"
                    points = {tabs[0].job_highlights?.qualifications}
        />
      case "About":
      case "Responsbilities" :
        
      default:
        break;
    }
  }

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
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: SIZES.small / 2 }}
            horizontal
          />
    
            {displayTabContent()}
    </View>
  )
}

export default Tabs