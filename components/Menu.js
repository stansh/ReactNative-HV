import React, { Component } from 'react';
import { View, Text, Animated, Image, ScrollView, FlatList, StyleSheet, SectionList} from 'react-native';
import { PricingCard } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const MenuData = [

    {
        plates:
            {
                section:'Plates',
                small:   
                    {   
                    size: 'Small',
                    description:  "2 choices of hummus, 2 choices of veggies, 2 pitas",
                    price: "$6.99"
                    },
                medium:
                    {
                    size: 'Medium',
                    description:  "3 choices of hummus, 4 choices of veggies, 3 pitas",
                    price: '$8.99'
                    },
                large:
                    {
                    size: 'Large',
                    description:  "5 choices of hummus, 5 choices of veggies, 5 pitas",
                    price: '$11.99'
                    },

            },
    

    

        byWeight:
            {
                section:'By Weight',
                juice32:
                    {   
                    size: '32 oz Jar of Juice',
                    description:  "Fresh juice of your choice",
                    price: "$12.99"
                    },
                juice64:   
                    {   
                    size: '64 oz Jar of Juice',
                    description:  "Fresh juice of your choice",
                    price: "$20.99"
                    },
                hummus32:
                    {   
                    size: '32 oz Box of Hummus',
                    description:  "Fresh hummus of your choice",
                    price: "$14.99"
                    },
                hummus64:
                    {   
                    size: '64 oz Box of Hummus',
                    description:  "Fresh hummus of your choice",
                    price: "$24.99"
                    },
            },
    
        juices:
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
    }
]
   
//----------------------------------------------------------------------


const RenderMenuItem = ({item}) => {
    return (
        <Animatable.View animation='fadeInRightBig' duration={1000}> 
            <PricingCard
            color="#4f9deb"
            title={item.size}
            price={item.price}
            info={item.description}
            button={{ title: 'order online', icon: 'flight-takeoff' }}
            />;
        </Animatable.View>
    );
}


function Menu (props) {
    return (
        <FlatList
            data={MenuData}
            renderItem={PricingCard}
        />
    );

}




export default Menu;