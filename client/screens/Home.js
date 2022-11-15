import React from 'react'
import {Button, Text , View} from 'react-native'

function Home({navigation}) {
  return (
    <View>
      <Text>
          Home
      </Text>
      <Button
      title='Detail'
      onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export default Home