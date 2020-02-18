import React, { Component} from 'react';
/* import Header from './Header'; */
import HealthThing from './HealthThing';
import Snacks from './Snacks';
import Recipes from './Recipes';
import CateringForm from './CateringForm';
import Menu from './Menu';

import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';  
/* import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPromotions, fetchPartners } from '../redux/ActionCreators'; */


const HealthThingNavigator = createStackNavigator(
  {
    HealthThing: { screen: HealthThing }
  },
  {
      navigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#FFD459'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
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

const SnacksNavigator = createStackNavigator(
  {
    Snacks: { screen: Snacks }
  },
  {
      navigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#FFD459'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          },
          headerLeft: <Icon
              name='carrot'
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
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
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


const MainNavigator = createDrawerNavigator(
  {
      HealthThing: {
          screen: HealthThingNavigator,
          navigationOptions: {
              drawerIcon: ({tintColor}) => (
                  <Icon
                      name='heartbeat'
                      type='font-awesome'
                      size={24}
                      color={tintColor}
                  />
              )
          }
      },
      Snacks: {
          screen: SnacksNavigator,
          navigationOptions: {
              drawerIcon: ({tintColor}) => (
                  <Icon
                      name='carrot'
                      type='font-awesome'
                      size={24}
                      color={tintColor}
                  />
              )
          }
      },
      Menu: {
          screen: MenuNavigator,
          navigationOptions: {
              drawerLabel: 'Menu',
              drawerIcon: ({tintColor}) => (
                  <Icon
                      name='bars'
                      type='font-awesome'
                      size={24}
                      color={tintColor}
                  />
              )
          }
      },

      
      
      

      

  },
  {
      drawerBackgroundColor: '#d6483c',
      contentComponent: CustomDrawerContentComponent
  }
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
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});
  
/*   export default connect(null, mapDispatchToProps)(Main); */
  export default (Main);
  