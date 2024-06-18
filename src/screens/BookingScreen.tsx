import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'
import imageSelect from '../searchImage'

export default function BookingScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  const city = route.params?.city

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  function nameApproved(name: string): boolean {
    const naming: RegExp = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/
    return naming.test(name)
  }

  function emailApproved(email: string): boolean {
    const regexMail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    return regexMail.test(email)
  }

  function dateApproved(date: string): boolean {
    return date != ''
  }

  function inputsApproved(): boolean {
    return (
      nameApproved(firstName) &&
      nameApproved(lastName) &&
      emailApproved(email) &&
      dateApproved(date)
    )
  }

  const today = new Date()

  const startDate = getFormatedDate(today)

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState('')

  let [disableNext] = useState(true)
  let [buttonBG] = useState('#434343')

  if (inputsApproved()) {
    disableNext = false
    buttonBG = '#000'
  }

  function handleOnPress() {
    setOpen(!open)
  }

  return (
    <View style={styles.container}>
      <View style={styles.carOverview}>
        <Image source={imageSelect(item.model)} style={styles.image} />
        <Text style={{ fontSize: 22, marginHorizontal: 6 }}>
          {item.price}
          <Text style={{ fontSize: 15 }}> kr/day</Text>
        </Text>
      </View>

      <View style={styles.information}>
        <ScrollView showsVerticalScrollIndicator={true} overScrollMode="never">
          <View>
            <Text id="Your information" style={styles.header}>
              Your information
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(newFirstName) => setFirstName(newFirstName.trim())}
              placeholder="First name"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(newLastName) => setLastName(newLastName.trim())}
              placeholder="Last name"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(newEmail) => setEmail(newEmail.trim())}
              placeholder="Email address"
            />
            <TextInput
              style={styles.textInput}
              onPressIn={handleOnPress}
              placeholder="Return date"
              value={date}
            />
            <Modal animationType="slide" transparent={true} visible={open}>
              <View style={styles.calendarScreen}>
                <View style={styles.calendarBottom}>
                  <DatePicker
                    mode="calendar"
                    minimumDate={startDate}
                    selected={date}
                    onDateChange={(propDate: any) => setDate(propDate)}
                  />
                  <Pressable
                    style={styles.confirmButton}
                    onPress={handleOnPress}
                  >
                    <Text style={styles.buttontext}>Confirm</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>

      <TouchableHighlight
        style={[styles.button, { backgroundColor: buttonBG }]}
        delayPressOut={400}
        activeOpacity={0.7}
        underlayColor="#434343"
        disabled={disableNext}
        onPress={() => {
          if (inputsApproved()) {
            navigation.navigate('Confirmation', {
              item,
              city,
              firstName,
              lastName,
              email,
              date,
            })
          }
        }}
      >
        <Text style={styles.buttontext}>Next</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  carOverview: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '55%',
    resizeMode: 'contain',
  },

  information: {
    flex: 1,
    justifyContent: 'center',
  },

  header: {
    fontSize: 22,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 10,
  },

  textInput: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 10,
    elevation: 5,
  },

  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: '50%',
    borderRadius: 100,
    height: 45,
    marginBottom: '10%',
    elevation: 5,
  },

  buttontext: {
    color: '#fff',
    fontSize: 16,
  },

  calendarScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3.9%',
    elevation: 5,
  },

  calendarBottom: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  confirmButton: {
    backgroundColor: '#000',
    width: '25%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 100,
  },
})
