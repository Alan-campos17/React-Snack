 import React from 'react';
import{ScrollView} from 'react-native';
import Titulo from './components/Titulo';
import Saudacao from './components/Saudacao';
import FotoPerfil from './components/FotoPerfil';
import CartaoUsuario from './components/CartaoUsuario';

 export default function App(){
   return(
     <ScrollView>
     
     <Titulo/>
     <Saudacao nome='Alan'/>
     <FotoPerfil/>
     <CartaoUsuario 
     nome='kauany' 
     descricao='moiado' 
     img= 'perfil00'/>

     <CartaoUsuario 
     nome='tartaruga' 
     descricao='ninja' 
     img= 'perfil02'/>

     <CartaoUsuario 
     nome='cat' 
     descricao='programado' 
     img= 'perfil00'/>

     <CartaoUsuario 
     nome='oi' 
     descricao='programador' 
     img= 'perfil04'/>
     </ScrollView>
   );

 } 