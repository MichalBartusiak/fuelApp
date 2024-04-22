import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

const HomePage = ({ navigation }) => {
	const onPressNavigationToFuel = () => {
		navigation.navigate('Fuel');
	};
	const { cardStyle, textBodyLarge, homePageButton } = styles;
	return (
		<Card style={cardStyle}>
			<Card.Content>
				<Text variant='displayLarge'>Fuel App</Text>
				<Text style={textBodyLarge} variant='bodyLarge'>
					Track your fuel expenses with our app!
				</Text>
			</Card.Content>
			<Card.Actions>
				<Button
					mode='contained'
					style={homePageButton}
					onPress={onPressNavigationToFuel}>
					Let's start!
				</Button>
			</Card.Actions>
		</Card>
	);
};

const styles = StyleSheet.create({
	cardStyle: {
		flex: 1,
		paddingTop: 50,
		alignContent: 'center',
		alignItems: 'center',
		height: '100%',
		textAlign: 'center',
	},
	textBodyLarge: {
		marginTop: 50,
	},
	homePageButton: {
		// textAlign: 'center',
		padding: 3,
		justifyContent: 'center',
		alignSelf: 'center',
		alignContent: 'center',
	},
});
export default HomePage;
