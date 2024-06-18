import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'

export default function CitySelectionScreen({ navigation }: any) {
  const [cities, setCities] = useState<any>([])
  const [selected, setSelected] = useState(0)
  const [error, setError] = useState(false)

  let [disableSearch] = useState(false)
  let [buttonBG] = useState('#000')

  useEffect(() => {
    axios
      .get(
        'https://my-json-server.typicode.com/MetaSoc/car-inc-database/cities'
      )
      .then((response) => {
        let citiesArray = response.data.map((item: any) => {
          return { key: item.id, value: item.name }
        })
        setCities(citiesArray)
        setError(false)
      })
      .catch((result) => setError(true))
  }, [])

  if (selected === 0) {
    disableSearch = true
    buttonBG = '#434343'
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <View style={{ width: '75%' }}>
        <SelectList
          data={cities}
          boxStyles={styles.boxStyles}
          dropdownStyles={styles.dropdownStyles}
          placeholder="Select a city"
          searchPlaceholder="Select a city"
          setSelected={setSelected}
        />
      </View>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('CarSelection', { cities, selected })
        }}
        style={[styles.button, { backgroundColor: buttonBG }]}
        activeOpacity={0.7}
        underlayColor="#434343"
        delayPressOut={400}
        disabled={disableSearch}
      >
        <Text style={styles.buttontext}>Search</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '50%',
  },
  boxStyles: {
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 100,
    borderWidth: 2,
    elevation: 5,
  },
  dropdownStyles: {
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 25,
  },
  button: {
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
    margin: 10,
    width: '75%',
    height: 48,
    elevation: 5,
  },
  buttontext: {
    color: '#fff',
    fontSize: 14,
    margin: 10,
  },
})
