import React from 'react'
import {Text , Button , View} from 'react-native'

function Favorites({navigation}) {
  return (
    <View>
        <Text>
            Favorites
        </Text>
        <Button
        title='Home'
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  )
}

export default Favorites