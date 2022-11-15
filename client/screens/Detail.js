import React from 'react'
import {Text , Button , View} from 'react-native'

function Detail({navigation}) {
  return (
    <View>
        <Text>
            Detail
        </Text>
        <Button
        title='Home'
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  )
}

export default Detail