import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { TextInput } from 'react-native-gesture-handler';

export default function TextToSpeech() {
    const [text, setText] = useState('');

    const speak = () => {
        Speech.speak(text)
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={text} placeholder="Digite algo para falar" onChangeText={t => setText(t)} />
            <Button title="Clique para falar" onPress={() => speak()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: StatusBar.currentHeight || 0
    },
    input: {
        marginTop: 50,
        height: 25,
        width: '80%',
        padding: 15,
        color: 'black',
        borderColor: 'gray',
        borderWidth: 1
    }
})