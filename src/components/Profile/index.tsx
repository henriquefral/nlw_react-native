import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile(){
    return (
        <View style={styles.container}>
            <Avatar urlImage='https://github.com/henriquefral.png'/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}> 

                        Olá, 

                    </Text>

                    <Text style={styles.username}> 
                        Henrique
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje a derrota é certa, mas a vitória pode ser alcançada.     
                </Text> 
            </View>
        </View>
    );
}