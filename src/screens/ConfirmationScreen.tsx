import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function ConfirmationScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  const city = route.params?.city

  const firstName = route.params?.firstName
  const lastName = route.params?.lastName
  const email = route.params?.email
  const date = route.params?.date

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>
        Review your booking information below:
      </Text>
      <Text />

      <View style={styles.information}>
        <Text style={styles.textStyle}>
          City:{'  '}
          <Text style={{ fontWeight: 'normal' }}>{city}</Text>
        </Text>
        <Text style={styles.textStyle}>
          Car:{'  '}
          <Text style={{ fontWeight: 'normal' }}>
            {item.brand} {item.model}
          </Text>
        </Text>
        <Text />
        <Text style={styles.textStyle}>
          First name:{'  '}
          <Text style={{ fontWeight: 'normal' }}>{firstName}</Text>
        </Text>
        <Text style={styles.textStyle}>
          Last name:{'  '}
          <Text style={{ fontWeight: 'normal' }}>{lastName}</Text>
        </Text>
        <Text style={styles.textStyle}>
          Email address:{'  '}
          <Text style={{ fontWeight: 'normal' }}>{email}</Text>
        </Text>
        <Text style={styles.textStyle}>
          Return date:{'  '}
          <Text style={{ fontWeight: 'normal' }}>{date}</Text>
        </Text>
      </View>

      <TouchableHighlight
        style={[
          styles.button,
          {
            marginTop: '8%',
            backgroundColor: '#fff',
          },
        ]}
        delayPressOut={400}
        underlayColor="#eee"
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.buttontext, { color: '#000' }]}>Edit</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[
          styles.button,
          {
            marginTop: '5%',
            marginBottom: '60%',
          },
        ]}
        delayPressOut={400}
        underlayColor="#444"
        onPress={() => navigation.navigate('Receipt', { firstName, email })}
      >
        <Text style={styles.buttontext}>Confirm</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  information: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: '5%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    borderWidth: 2,
    borderRadius: 100,
    width: '50%',
    height: 45,
    elevation: 5,
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    margin: 8,
  },
})
