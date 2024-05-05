import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Colors from '../../theme/colors';


const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={Colors.BLACK}/>
            <Text>Yükleniyor...</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    },
});


export default Spinner;
