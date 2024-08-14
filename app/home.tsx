<<<<<<< HEAD
import { View, Text } from 'react-native'
import React from 'react'
<<<<<<< HEAD

const home = () => {
  return (
    <View>
      <Text>home</Text>
    </View>
=======
=======
import { View, Text  , StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
>>>>>>> 80f600a (started work on the home page)
import ScreenWrapper from '@/components/ScreenWrapper'
import CustomText from '@/components/typography/text'
import { user } from '@/types/app.t'
import { retrieveUserData } from '@/appStorage/user/user'
import { vh, vw } from '@/helpers/responsivesizes'
import { Feather, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { theme } from '@/constants/theme'
import ExpenseBoard from '@/components/functional/expenseBoard'
import TransactionList from '@/components/functional/list'


const home = () => {

  const [userInfo , setUserInfo] =  useState<user>()

  //initial render
  useEffect(()=>{
    initializeUserInfo()
  } , [])

console.log(new Date())

  const initializeUserInfo  = async ()=>{
    const data = await retrieveUserData()

    if(data.success){
      setUserInfo(data.data)
    }
  }




  return (
    <ScreenWrapper SafeArea={true} Style={style.container}>
       
       {/* top */}
       <View style={style.top}>
            <View>
              <CustomText isSupporting text='Hello!'/>
              {userInfo?<CustomText isheader style={style.name} text={userInfo.name}/>:<CustomText isheader style={style.name} text={'user'}/>}
            </View>

            {/* delete user button */}

            <TouchableOpacity>
              <FontAwesome6 name="bars-staggered" size={vh(4)} color={theme.gray.gray2}/>
            </TouchableOpacity>
       </View>

       {/* expense board */}

      <View style={style.expenseboard}>
            <ExpenseBoard/>
      </View>

      {/* call to actions */}
      <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={style.action}>

        <TouchableOpacity style={style.actionbtn}>

          <FontAwesome6 color={theme.gray.gray2} size={vh(1.8)} name='money-bill-trend-up'/>

          <CustomText text='Set a Goal'/>

          <Feather color={theme.gray.white} size={vh(1.8)} name='chevron-right'/>

        </TouchableOpacity>


        <TouchableOpacity style={style.actionbtn}>
        <FontAwesome6 color={theme.gray.gray2} size={vh(1.8)} name='piggy-bank'/>

          <CustomText text='Start Budget'/>

          <Feather color={theme.gray.white} size={vh(1.8)} name='chevron-right'/>
        </TouchableOpacity>

        <TouchableOpacity style={style.actionbtn}>
        <MaterialIcons color={theme.gray.gray2} size={vh(1.8)} name='celebration'/>

          <CustomText text='Plan Event'/>

          <Feather color={theme.gray.white} size={vh(1.8)} name='chevron-right'/>
        </TouchableOpacity>

      </ScrollView>


      {/* list area */}

        <View style={style.listarea}>
          <TransactionList/>
        </View>


    </ScreenWrapper>
>>>>>>> abca2d1 (change app)
  )
}

const style = StyleSheet.create({
  container:{
    paddingHorizontal:8,
  },

  //top
  top:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:5,
  }
  ,
  name:{
    fontSize:vh(2.3) , textTransform:'capitalize'
  },

  //expense board
  expenseboard:{
    marginTop:20,
  }

  ,

  //call to action

  action:{
    marginTop:5,
    paddingLeft:10,
    paddingVertical:15,
    gap:15,
    height: vh(10),

  },

  actionbtn:{
    minWidth: vw(40),
    justifyContent:'space-around',
    backgroundColor:theme.primary.dark,
    borderRadius:theme.curves.lg,
    alignItems:'center',
    borderCurve:'continuous',
    flexDirection:'row'
  },

  listarea:{
    height:vh(60),
    padding:20,
   
  }

})

export default home