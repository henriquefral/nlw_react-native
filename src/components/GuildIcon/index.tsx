import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon(){
    const uri = 'https://i.blogs.es/1a5878/the-witcher/1366_2000.jpg';
    return (
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode='cover'
        />
    );
}