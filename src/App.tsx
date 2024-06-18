import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import CitySelectionScreen from './screens/CitySelectionScreen'
import CarSelectionScreen from './screens/CarSelectionScreen'
import CarDetailsScreen from './screens/CarDetailsScreen'
import BookingScreen from './screens/BookingScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'
import ReceiptScreen from './screens/ReceiptScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CitySelection"
          component={CitySelectionScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="CarSelection"
          component={CarSelectionScreen}
          options={({ route }: any) => ({
            title: route.params.cities[route.params.selected - 1].value,
            headerStyle: { shadowColor: '#000' },
            cardStyle: { backgroundColor: '#fff' },
          })}
        />
        <Stack.Screen
          name="CarDetails"
          component={CarDetailsScreen}
          options={({ route }: any) => ({
            title: route.params.item.brand + ' ' + route.params.item.model,
            headerStyle: { shadowColor: '#000' },
          })}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={() => ({
            headerStyle: { shadowColor: '#000' },
          })}
        />
        <Stack.Screen
          name="Confirmation"
          component={ConfirmationScreen}
          options={() => ({
            headerStyle: { shadowColor: '#000' },
          })}
        />
        <Stack.Screen
          name="Receipt"
          component={ReceiptScreen}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
