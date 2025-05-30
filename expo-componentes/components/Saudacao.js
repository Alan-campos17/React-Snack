import React from 'react';
import{Text} from 'react-native';

export default function Saudacao({nome}){
  return(
    <Text style={{fontSize:18,}}> 
    Ola,{nome}
    </Text>
  );

}