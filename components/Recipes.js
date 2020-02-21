import React, { Component} from 'react';
import { View, Text, Animated, Image, ScrollView, FlatList, StyleSheet} from 'react-native';


const recipeList = [
    {
    id: 0,
    name:'Recipe 1',
    step1:'Puree the first seven ingredients in a food processor until smooth',
    step2:'Add in the chick',
    step3:'Puree for 3-4 minutes, or until smooth',
    step4:'Taste and season',
    step5:'Garnish and serve'
    },
    {
    id: 1,
    name:'Recipe 2',
    step1:'Place the chickpeas in a medium saucepan and add the baking soda',
    step2:'Add the tahini to the food processor and blend until the mixture is thick and creamy',
    step3:'While running the food processor, drizzle in 2 tablespoons ice water',
    step4:'Add the cumin and the drained, over-cooked chickpeas to the food processor',
    step5:'Taste, and adjust as necessary',
    step6:'Scrape the hummus into a serving bowl or platter, and use a spoon to create nice swooshes on top'
    },
    {
    id: 2,
    name:'Recipe 3',
    step1:'In the bowl of a food processor, combine the tahini and lemon juice and process for 1 minute, scrape the sides and bottom of the bowl then process for 30 seconds more',
    step2:'Add the olive oil, minced garlic, cumin, and a 1/2 teaspoon of salt to the whipped tahini and lemon juice',
    step3:'With the food processor turned on, slowly add 2 to 3 tablespoons of water until you reach the perfect consistency',
    step4:'Taste for salt and adjust as needed. Serve hummus with a drizzle of olive oil and dash of paprika'
    },
    {
    id: 3,
    name:'Recipe 4',
    step1:'Add all the ingredients to your Vitamix or high-powered blender and secure the lid. Remove the lid cap and insert the tamper',
    step2:'Turn the blender on high for 30 seconds (or more for a creamier texture) and use the tamper to push the hummus into the blades. Add more chickpea liquid (aquafaba), if desired, for a softer hummus',
    step3:'Add the hummus to a serving plate and garnish with olive oil, paprika and fresh parsley.',
    step4:'The hummus will last for up to a week in the fridge, if kept in a sealed container. You can also freeze the hummus in sealed containers for future use, then just thaw as needed. It is actually one of the most common foods I meal prep on a regular basis as it is so easy'
    },
]





function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text 
        style={styles.title}
        onPress={() => { this.setModalVisible(true);}}>
        {title}
        </Text>
        <Text >{recipeList.step1}</Text>
        <Text style={styles.step}>{recipeList.step2}</Text>
        <Text style={styles.step}>{recipeList.step3}</Text>
        <Text style={styles.step}>{recipeList.step4}</Text>
        <Text style={styles.step}>{recipeList.step5}</Text>
        <Text style={styles.step}>{recipeList.step6}</Text>
      </View>
    );
  }
  

const Recipes = (props) => {
    return (
        <ScrollView>
            <FlatList
            data={recipeList}
            renderItem={({item}) => <Item title={item.name} />}
            keyExtractor={item => item.id}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
      
    },
    item: {
      backgroundColor: '#0c8a42',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
      color:'white'
    },
    step: {
        fontSize: 10,
        color:'black'
      }
  });


export default Recipes;