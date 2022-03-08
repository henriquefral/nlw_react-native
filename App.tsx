import React from 'react';
import { View, Text} from 'react-native';
import { SignIn  } from './src/screens/SignIn';


export default function App(){
  return(
    <View style = {{flex:1}}> 
    
      <SignIn/>
    
    </View>
  )

}