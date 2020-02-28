
import React, { Component } from 'react';
import { View, Text, Animated, Image, ScrollView, FlatList, StyleSheet, SectionList} from 'react-native';
import { Tile } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


const snackData = [
  {
    id:0,
    image: '../assets/iamges/CarPic23.png',
    altText: 'Hummus Flavors',
    caption: 'Hummus Flavors',
    selection: 'classic | red pepper | basil pesto | roasted garlic | lemon'
  },
  {
    id:1,
    image: '../assets/images/CarPic47.png',
    altText: 'Veggies Selection',
    caption: 'Veggies Selection',
    selection: 'cucumbers | peppers | carrots | celery | broccoli'
  },
  {
    id:2,
    image: '../assets/images/CarPic28.png',
    altText: 'Pitas Flavors',
    caption: 'Pitas Flavors',
    selection: 'whole wheat | pita chips | pita with cheese '
  },
  {
    id:3,
    image: '../assets/images/CarPic33.png',
    altText: 'Juice Selection',
    caption: 'Juice Selection',
    selection: 'carrot | tomato | orange | mango | apple '
  }
];

class Snacks extends Component {


   static navigationOptions = {
       title: 'Snacks'
   };

   render() {
       
       const renderSnackItem = ({item}) => {
           return (
               <Animatable.View animation='fadeInRightBig' duration={1000}> 
                   <Tile
                       title={item.caption}
                       caption={item.selection}
                       featured
                       /* onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })} */
                       imageSrc={item.image}
                   />
             </Animatable.View> 
           );
       };

        
       return (
           <FlatList
               data={snackData}
               renderItem={renderSnackItem}
               keyExtractor={item => item.id.toString()}
           />
       );
   }
}

export default Snacks;