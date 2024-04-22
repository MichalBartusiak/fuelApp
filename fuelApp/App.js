import { SafeAreaView, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FuelMain from './components/fuel/FuelMain';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<PaperProvider>
				{/* <SafeAreaView> */}
				<Stack.Navigator>
					<Stack.Screen name='Home' component={HomePage} />
					<Stack.Screen name='Fuel' component={FuelMain} />
				</Stack.Navigator>
				{/* </SafeAreaView> */}
			</PaperProvider>
		</NavigationContainer>
	);
}
