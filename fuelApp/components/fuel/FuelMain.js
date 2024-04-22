import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Modal, Portal, Text } from 'react-native-paper';
import FuelForm from './FuelForm';
const FuelMain = () => {
	const fueling = [];
	const { fuelTitle, safeArea, button, containerStyle } = style;

	const [visible, setVisible] = useState(false);

	const showFuelFormModal = () => {
		setVisible(true);
	};
	const hideFuelFormModal = () => {
		setVisible(false);
	};

	return (
		<SafeAreaView style={safeArea}>
			<Portal>
				<Modal
					visible={visible}
					onDismiss={hideFuelFormModal}
					contentContainerStyle={containerStyle}>
					<FuelForm hideModal={hideFuelFormModal} />
				</Modal>
			</Portal>

			<Button
				onPress={showFuelFormModal}
				style={button}
				icon='plus'
				mode='contained'>
				Add new fueling
			</Button>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	safeArea: { height: '100%', justifyContent: 'center' },

	fuelTitle: {
		textAlign: 'center',
		marginTop: 20,
	},
	button: {
		padding: 3,
		width: 200,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	containerStyle: {
		backgroundColor: 'white',
		padding: 20,
	},
});
export default FuelMain;
