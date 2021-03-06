import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { styles } from './styles';
import {  } from 'react-native-gesture-handler';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id:'1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'Vamos tentar a vitória'
        },
        {
            id: '2',
            guild: {
                id:'1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '3',
            date: '23/07 às 21:40',
            description: 'Oi'
        }
    ]

    function handleCategorySelect(categoryId:string) {
        categoryId === category ? setCategory('') : 
        setCategory(categoryId);
    }

    return(
        <View>
            <View style={styles.header}> 
                <Profile/>
                <ButtonAdd/>
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <View style={styles.content}>
                    <ListHeader
                        title={'Partidas agendadas'}
                        subtitle={'Total 6'}
                    />

                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <Appointment
                                data={item}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider/>}
                        style={styles.matches}
                        showsHorizontalScrollIndicator={false}
                    />
                
                </View>    
            </View> 
        </View> 
    );
}