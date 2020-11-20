import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';

export default function Cameras() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [uri, setUri] = useState('')

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const tirarFoto = () => {
        const options = {
            quality: 1
        }

        camera.takePictureAsync({ metadata: options })
            .then((data) => {
                setUri(data.uri)
                console.log(uri)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Camera ref={cam => {
            camera = cam;
        }} style={{ flex: 1 }} type={type}>

            <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'Column',
                }}>

                <Image style={{ width: '100%', height: '85%' }} source={{ uri: uri }} />

                <View style={{
                    flex: 1,
                    backgroundColor: '#2a2a2a',
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            marginLeft: 15
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.front
                                    ? Camera.Constants.Type.back
                                    : Camera.Constants.Type.front
                            );
                        }}>
                        <Text style={{ textAlign: 'center', fontSize: 22, marginBottom: 30, color: 'white' }}>Mudar Câmera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            marginLeft: 15
                        }}
                        onPress={tirarFoto}>
                        <Text style={{ fontSize: 22, marginBottom: 30, color: 'white' }}>Tirar foto</Text>
                    </TouchableOpacity>
{/* 
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={limpar}>
                        <Text style={{ fontSize: 22, marginBottom: 30, color: 'white' }}>Limpar</Text>
                    </TouchableOpacity> */}
                </View>

            </View>
        </Camera>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: StatusBar.currentHeight || 0
    },
})