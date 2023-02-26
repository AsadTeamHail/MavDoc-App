import React from 'react'
import { useRoute } from "@react-navigation/native"
import { StyleSheet, Text, View } from 'react-native'

import checkNetConnection from '../../../../functions/checkNetConnection' //Import check netinfo func from functions folder
import Header from '../../../shared/Header'//Header import from shared holder
import En from'../../../../assets/locals/en/common.json'//English language import from assets
import Ur from '../../../../assets/locals/ur/common.json'//Urdu language import from assets

const RentOrTenancy = () => {
   //Props of language from agreement screen
   const route = useRoute()
   const language = route.params?.lang

  return (
    <View>
      <Text>RentOrTenancy</Text>
    </View>
  )
}

export default RentOrTenancy

const styles = StyleSheet.create({})