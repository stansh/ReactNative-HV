import React, { Component } from 'react';

/* import {
  Card, CardText, CardBody,
  CardTitle, ListGroup, ListGroupItem 
} from 'reactstrap'; */

import { View, Text, Animated, Image, ScrollView, FlatList} from 'react-native';
import { Card, ListItem } from 'react-native-elements';

/* import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards'; */


const HealthThing = (props) => {

   
  return (
       <ScrollView>
            <Card
                title="Why hummus is great?"
                image = {require('../assets/images/pic21.jpg')}
                titleStyle = {{color: '#0c8a42',fontSize: 20}}
                
                   
                >
                
                <Text
                    style={{margin: 10}} >
                    Hummus is typically made by blending chickpeas (garbanzo beans), tahini (ground sesame seeds), olive oil, lemon juice and garlic in a food processor. Not only is hummus delicious, but it is also versatile, packed with nutrients and has been linked to many impressive health and nutritional benefits. Hummus provides a wide variety of vitamins and minerals. It is also a great plant-based source of protein, which makes it a nutritious option for vegans and vegetarians. 
                </Text>
                
            </Card>

            <Card
                title="Why is it important to eat vegetables?"
                image = {require('../assets/images/pic31.jpg')}
                titleStyle = {{color: '#0c8a42',fontSize: 20}}
                >
                
                <Text
                    style={{margin: 5}} >
                    Most vegetables are naturally low in fat and calories. None have cholesterol. (Sauces or seasonings may add fat, calories, and/or cholesterol. 
                </Text>
                <Text
                    style={{margin: 5}} >
                    Vegetables are important sources of many nutrients, including potassium, dietary fiber, folate (folic acid), vitamin A, and vitamin C.
                </Text>
                <Text
                    style={{margin: 5}} >
                    Diets rich in potassium may help to maintain healthy blood pressure. Vegetable sources of potassium include sweet potatoes, white potatoes, white beans, tomato products (paste, sauce, and juice), beet greens, soybeans, lima beans, spinach, lentils, and kidney beans.
                </Text>
            </Card>

        </ScrollView>
             
             
        
      
           

      
          
      
  );
};

export default HealthThing;




















{/* <div class = "container">
            <div class="row pb-1">
                    <h3>It's not rocket science..</h3>
                </div>
                <hr>
        <div class = "row">
            <div class = "col-md">
                <img class = "rounded"  width=500px src="images/pic21.jpg" alt="">
            </div>
            <div class = "col-md">
                <div class="card" >
                    <div class="card-body" id="indexCard">
                    
                        <h3 class="card-title">Why hummus is great</h3>
                        <p class ="card-text">Hummus is typically made by blending chickpeas (garbanzo beans), tahini (ground sesame seeds), olive oil, lemon juice and garlic in a food processor. Not only is hummus delicious, but it is also versatile, packed with nutrients and has been linked to many impressive health and nutritional benefits. Hummus provides a wide variety of vitamins and minerals. It is also a great plant-based source of protein, which makes it a nutritious option for vegans and vegetarians.</p>
                    </div>
                </div>
            </div>
                
        </div>
        <div class = "row ">
                <div class = "col-sm">
                    <img class = "rounded " width=500px  src="images/pic31.jpg" alt="">
                </div>
                <div class = "col-sm">
                    <div class="card" >
                        <div class="card-body" id="indexCard">
                        
                            <h3 class="card-title mx-2" >Why is it important to eat vegetables</h3>
                            <p class ="card-text >
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Most vegetables are naturally low in fat and calories. None have cholesterol. (Sauces or seasonings may add fat, calories, and/or cholesterol.)</li>
                                    <li class="list-group-item">Vegetables are important sources of many nutrients, including potassium, dietary fiber, folate (folic acid), vitamin A, and vitamin C.</li>
                                    <li class="list-group-item">Diets rich in potassium may help to maintain healthy blood pressure. Vegetable sources of potassium include sweet potatoes, white potatoes, white beans, tomato products (paste, sauce, and juice), beet greens, soybeans, lima beans, spinach, lentils, and kidney beans.</li>
                                    
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                    
            </div>
    </div> */}