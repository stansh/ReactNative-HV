import React, { Component} from 'react';
/* import Header from './Header'; */
import Recipes from './Recipes';
import Snacks from './Snacks';
import CateringForm from './CateringForm';
 
/* import CateringForm from './qCateringForm';  */
import Menu from './Menu';

import HealthThing from './HealthThing';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';  
/* import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPromotions, fetchPartners } from '../redux/ActionCreators'; */
import { useFonts } from '@use-expo/font';


const HealthThingNavigator = createStackNavigator(
  {
    HealthThing: { screen: HealthThing }
  },
  {
      navigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#FFD459'
          },
          title: 'The Health Thing',
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#d6483c', 
              fontFamily: 'AmaticSC-Bold',
              fontSize:45
              
          },
          headerLeft: <Icon
              name='heartbeat'
              type='font-awesome'
              
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
          />
      })
  }
);

const RecipesNavigator = createStackNavigator(
  {
    Recipes: { screen: Recipes }
  },
  {
      navigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#FFD459'
          },
          title: 'Recipes',
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#d6483c',
              fontFamily: 'AmaticSC-Bold',
              fontSize:45
              
              
          },
          headerLeft: <Icon
              name='clipboard'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
          />
      })
  }
);

const SnacksNavigator = createStackNavigator(
  {
    Snacks: { screen: Snacks }
  },
  {
      navigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#FFD459'
          },
          title: 'Snacks',
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#d6483c',
            fontFamily: 'AmaticSC-Bold',
            fontSize:45
            
              
          },
          headerLeft: <Icon
              name='ellipsis-v'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
          />
      })
  }
);


const MenuNavigator = createStackNavigator(
    {
      Menu: { screen: Menu }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#FFD459'
            },
            title: 'Menu',
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#d6483c',
              fontFamily: 'AmaticSC-Bold',
              fontSize:45
              
              
              
            },
            headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
  );


  const CateringFormNavigator = createStackNavigator(
    {
      CateringForm: { screen: CateringForm }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#FFD459'
            },
            title: 'Catering Request',
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#d6483c',
              fontFamily: 'AmaticSC-Bold',
              fontSize:40,
              marginLeft: 20
              
              
            },
            headerLeft: <Icon
                name='users'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
  );


  //DrawerHeader-------------

const CustomDrawerContentComponent = props => (
  <ScrollView>
      <SafeAreaView 
          style={styles.container}
          forceInset={{top: 'always', horizontal: 'never'}}>
          <View style={styles.drawerHeader}>
              <View style={{flex: 1}}>
                  <Image source={require('../assets/images/logo.png')} style={styles.drawerImage} />
              </View>
              <View style={{flex: 2}}>
                  <Text style={styles.drawerHeaderText}>Hummus and Veggies</Text>
              </View>
          </View>
          <DrawerItems {...props} />
      </SafeAreaView>
  </ScrollView>
);

//Main Drawer Navigation-------------------

const MainNavigator = createDrawerNavigator(
  {
        HealthThing: {
            screen: HealthThingNavigator,
            navigationOptions: {
                drawerLabel: 'The Health Thing',
                
                
                drawerIcon: 
                    <Icon
                        name='heartbeat'
                        type='font-awesome'
                        size={24}
                        color='white'
                    />
                
            }
        },

        Snacks: {
            screen: SnacksNavigator,
            navigationOptions: { 
                drawerLabel: 'Snacks',
                drawerIcon: 
                    <Icon
                    name='ellipsis-v'

                    type='font-awesome'
                    size={24}
                    color='white'
                    />
                }
        },


        Menu: {
          screen: MenuNavigator,
          navigationOptions: {
              drawerLabel: 'Menu',
              
              drawerIcon:
                  <Icon
                      name='bars'
                      type='font-awesome'
                      size={24}
                      color='white'
                      
                  />
              
          }
      },
 

        Recipes: {
            screen: RecipesNavigator,
            navigationOptions: { 
                drawerLabel: 'Recipes',
                
                drawerIcon: 
                    <Icon
                        name='clipboard'
                        type='font-awesome'
                        size={24}
                        color='white'
                    />
                },
                
                
        },

        CateringForm: {
            screen: CateringFormNavigator,
            navigationOptions: { 
                drawerLabel: 'Catering Request',
                
                
                
                drawerIcon: 
                    <Icon
                        name='users'
                        
                        type='font-awesome'
                        size={24}
                        color='white'
                    />
                },
                
                
        },


    },
  
  {
      drawerBackgroundColor: '#0c8a42',
      contentOptions:{
        activeTintColor:'#0c8a42',
        activeBackgroundColor: '#FFD459',
        inactiveTintColor:'#eee',
        labelStyle: {
            fontFamily: 'Kalam-Regular',
            fontWeight: '10',
            fontSize: 18
            
          },
       
    },

      contentComponent: CustomDrawerContentComponent
      
  },

  
);



class Main extends Component {
    render() {
        return (
          <View style={{
            flex: 1,
            paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
        }}>
            <MainNavigator />
        </View>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#0c8a42',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 35, 
        margin: 20,
        fontFamily: 'AmaticSC-Bold'
    },
    drawerImage: {
        margin: 20,
        height: 60,
        width: 80
    },
    stackIcon: {
        marginLeft: 20,
        color: '#d6483c',
        fontSize: 25
    }

   
});
  
/*   export default connect(null, mapDispatchToProps)(Main); */

  export default Main;
  