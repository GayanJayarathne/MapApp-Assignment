import React, { useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function MapScreen() {
    const [pins, setPins] = useState([
        {
            id: 1,
            latitude: 37.78825,
            longitude: -122.4324,
            title: 'Drainage issue 1',
            date: '16/07',
            image: require('../assets/drainage.jpg'),
        },
        {
            id: 2,
            latitude: 37.79825,
            longitude: -122.4424,
            title: 'Drainage issue 2',
            date: '20/08',
            image: require('../assets/drainage.jpg'),
        },
        {
            id: 3,
            latitude: 37.77825,
            longitude: -122.4524,
            title: 'Drainage issue 3',
            date: '30/08',
            image: require('../assets/drainage.jpg'),
        },
        // Add more pins here
    ]);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825, // Center the map on the pins
                    longitude: -122.4324,
                    latitudeDelta: 0.0422, // Zoom level
                    longitudeDelta: 0.0221,
                }}
            >
                {pins.map((pin) => (
                    <Marker
                        key={pin.id}
                        coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
                    >
                        <Callout tooltip>
                            <View style={styles.calloutContainer}>
                                <View style={styles.containerHeader}>
                                    <Text style={styles.title}>{pin.title}</Text>
                                    <Text style={styles.date}>{pin.date}</Text>
                                </View>
                                <View style={styles.containerBody}>
                                    <Text>
                                        <Image
                                            source={pin.image }
                                            style={styles.image}
                                            resizeMode={'contain'}
                                        />
                                    </Text>

                                </View>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    calloutContainer: {
        width: 200,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    containerHeader: {
        width: "100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor: 'white',
        alignItems: 'center',
        alignContent:"space-between",
    },
    containerBody: {
        width: "100%",
        backgroundColor: 'white',
        alignItems: 'center',
        alignContent:"center",
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    image: {
        width: 160,
        height: 90,
        marginBottom: 1,
        borderRadius: 1,
    },
    date: {
        fontSize: 14,
        color: 'gray',
    },
});
