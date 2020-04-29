
import React, { Component } from 'react';
import { View, Text, Animated, Image, ScrollView, FlatList, StyleSheet, SectionList} from 'react-native';
import { Tile } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { SNACKS } from '../shared/snacks'

const snackData = SNACKS;

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
                       titleStyle = {styles.text}
                       caption={item.selection}
                       titleStyle = {{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}
                       captionStyle = {{backgroundColor: 'rgba(52, 52, 52, 0.8)' }}
                       
                       
                      
                       featured
                       /* onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })} */
                       imageSrc= {item.image}
                       
                       
                       
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


const styles = StyleSheet.create({
  text: {
    color:'#0c8a42'
    
    
  },


 
});

export default Snacks;




/* const snackData = [
  {
    id:0,
    image: require('../assets/images/CarPic23.png'),
    altText: 'Hummus Flavors',
    caption: 'Hummus Flavors',
    selection: 'classic | red pepper | basil pesto | roasted garlic | lemon'
  },
  {
    id:1,
    image: require('../assets/images/CarPic47.png'),
    altText: 'Veggies Selection',
    caption: 'Veggies Selection',
    selection: 'cucumbers | peppers | carrots | celery | broccoli'
  },
  {
    id:2,
    image:require('../assets/images/CarPic28.png'),
    altText: 'Pitas Flavors',
    caption: 'Pitas Flavors',
    selection: 'whole wheat | pita chips | pita with cheese'
  },
  {
    id:3,
    image:require( '../assets/images/CarPic33.png'),
    altText: 'Juice Selection',
    caption: 'Juice Selection',
    selection: 'carrot | tomato | orange | mango | apple '
  }
];
 */