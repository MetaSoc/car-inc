import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function CarDetailsScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  const city = route.params?.city
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center' }}>
        <View style={styles.topPart}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            Additional information:
          </Text>
          <View style={styles.details}>
            <View style={{ marginRight: '10%' }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../assets/detailsIcons/no-smoking.png')}
                  style={styles.icon}
                />
                <Text style={styles.textStyle}>Smoke Free</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../assets/detailsIcons/door.png')}
                  style={styles.icon}
                />
                <Text style={styles.textStyle}>{item.doors} doors</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Image
                  source={require('../../assets/detailsIcons/bags.png')}
                  style={styles.icon}
                />
                <Text style={styles.textStyle}>{item.bags} large bag(s)</Text>
              </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../assets/detailsIcons/seats.png')}
                  style={styles.icon}
                />
                <Text style={styles.textStyle}>{item.seats} seats</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../assets/detailsIcons/transmission.png')}
                  style={styles.icon}
                />
                <Text style={styles.textStyle}>{item.transmission}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../assets/detailsIcons/ac.png')}
                  style={styles.icon}
                />
                <Text style={styles.textStyle}>{item.ac}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <TouchableHighlight
        style={styles.button}
        delayPressOut={400}
        underlayColor="#434343"
        onPress={() => navigation.navigate('Booking', { item, city })}
      >
        <Text style={styles.buttontext}>Select</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  topPart: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  details: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    resizeMode: 'contain',
    marginTop: 2,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    width: '50%',
    height: 45,
    marginTop: '10%',
    marginBottom: '30%',
    elevation: 5,
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    margin: 8,
  },
})
