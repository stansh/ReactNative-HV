import React, { Component } from 'react';
import { View, Text, Animated, Image, ScrollView, FlatList, StyleSheet, SectionList} from 'react-native';
import { PricingCard,Tile  } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { platesData, byWeightData,juicesData } from '../shared/menuData'



const Plates = platesData;
const byWeight = byWeightData;
const Juices = juicesData;
  




const RenderMenuItem = ({item}) => {
    return (
        
           <View> 
               
                <PricingCard
                color="#0c8a42"
                title={item.size}
                price={item.price}
                
                info={item.description}
                button={{ title: ' order', icon: 'add' }}
                />
            </View>
   
    );
}





function Menu () {
  
        return (
            <Animatable.View animation='fadeInDown' duration={500} delay={500}>
            <ScrollView>
                <Text style={styles.header}>Plates</Text>

                <FlatList
                    data={Plates}
                    renderItem={RenderMenuItem}
                    keyExtractor={item => item.id}  
                    
                />
                <Text style={styles.header}>By Weight</Text>

                <FlatList
                    data={byWeight}
                    renderItem={RenderMenuItem}
                    keyExtractor={item => item.id}  
                />
                 <Text style={styles.header}>Juices</Text>

                <FlatList
                    data={Juices}
                    renderItem={RenderMenuItem}
                    keyExtractor={item => item.id}  
                />
     
            </ScrollView>
            </Animatable.View>
          );

    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          
        },
        item: {
          backgroundColor: '#f9c2ff',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
          fontFamily: 'AmaticSC-Regular'
          

        },
        color: {
          fontSize: 25,
          color:'#0c8a42'
        },
        header:{
            fontSize: 30,
            backgroundColor:'#d6483c',
            padding: 20,
            color: 'white',
            fontFamily: 'Kalam-Bold'


        }
      });

export default Menu;


/* const PlatesData = [

        {   
        id: 0,    
        size: 'Small',
        description:  ['2 choices of hummus', '2 choices of veggies', '2 pitas'],
        price:'$6.99',
        },
    
        {
        id: 1,
        size: 'Medium',
        description:  ['3 choices of hummus', '4 choices of veggies', '3 pitas'],
        price: '$8.99',
        },
    
        {
        id: 2,
        size: 'Large',
        description: ['5 choices of hummus', '5 choices of veggies', '5 pitas'],
        price: '$11.99',
        },
    

];
 */
            
    

   

       
            
/* const byWeightData = [

        {   
        id: 0,
        size: '32 oz Jar of Juice',
        description:  ['Fresh juice of your choice'],
        price: '$12.99',
        },
        
        {   
        id: 1,    
        size: '64 oz Jar of Juice',
        description:  ['Fresh juice of your choice'],
        price: '$20.99',
        },
    
        { 
        id: 2,  
        size: '32 oz Box of Hummus',
        description: [ 'Fresh hummus of your choice'],
        price: '$14.99',
        },
    
        {   
        id: 3,
        size: '64 oz Box of Hummus',
        description:  ['Fresh hummus of your choice'],
        price: '$24.99',
        },
    ]; */

    
        /* 
            {
                section:'Juices',
                medium:
                    {   
                    size: 'Medium',
                    description:  "Choose your flavor",
                    price: "$4.99"
                    },
                large: 
                    {   
                    size: 'Large',
                    description:  "Choose your flavor",
                    price: "$6.99"
                    },
                vbm:
                    {   
                    size: 'Virgin Bloody Mary',
                    description:  "Enjoy it!",
                    price: "$7.99"
                    }
            }
     */

   
//----------------------------------------------------------------------