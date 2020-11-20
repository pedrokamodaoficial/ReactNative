import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        backgroundColor: '#2a2a2a',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    nome: {
        color: 'white',
        fontSize: 32
    }
});

export default function Contato() {
    const [contatos, setContatos] = useState([])

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails],
                });

                if (data.length > 0) {
                    setContatos(data)
                    const contact = data[0];
                }
            }
        })();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <Item nome={item.firstName} />
        )
    }

    const Item = ({ nome }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.nome}>{nome}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text>Contatos</Text>
            <FlatList
                data={contatos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}