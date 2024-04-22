import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Icon, TextInput } from 'react-native-paper';

const FuelForm = (props) => {
	const [text, setText] = useState('');
	const { inputStyle, modalButton } = style;

	const { hideModal } = props;
	return (
		<SafeAreaView>
			<TextInput
				style={inputStyle}
				label='Gas Station Name'
				value={text}
				onChange={(text) => {
					setText(text);
				}}
				right={<TextInput.Icon icon='gas-station' />}
			/>
			<TextInput
				style={inputStyle}
				label='Type of fuel'
				value={text}
				onChange={(text) => {
					setText(text);
				}}
				right={<TextInput.Icon icon='fuel' />}
			/>
			<TextInput
				style={inputStyle}
				label='Amount of fuel'
				value={text}
				onChange={(text) => {
					setText(text);
				}}
				right={<TextInput.Icon icon='counter' />}
			/>
			<TextInput
				style={inputStyle}
				label='Fuel price'
				value={text}
				onChange={(text) => {
					setText(text);
				}}
			/>

			<Button style={modalButton} onPress={hideModal} mode='contained'>
				Add
			</Button>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	safeArea: {},
	inputStyle: {
		marginBottom: 10,
	},
	modalButton: {
		marginTop: 20,
		// fontSize: '20px',
	},
});
export default FuelForm;
