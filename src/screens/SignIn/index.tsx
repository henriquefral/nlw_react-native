import React from 'react';
import { 
    View, 
    Text, 
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png'; //Se não declarar como módulo, segue a página @types.
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';



export function SignIn(){
    const navigation = useNavigation();

    function HandleSignIn(){
        navigation.navigate('Home');
    }

    return (
        <Background> 
            <View style={styles.container}> 
                <Image 
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode='stretch'
                />

                <View style = {styles.content}> 
                    <Text style = {styles.title}> 
                        Conecte-se {'\n'}    
                        e organize suas
                        jogatinas
                    </Text>

                    <Text style = {styles.subtitle}> 
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos

                    </Text>

                    <ButtonIcon 
                        title="Entrar com Discord"
                        onPress={HandleSignIn}
                    />
                </View>
            </View>
        </Background>
    );
}