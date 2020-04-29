
import React from 'react';
import Main from './components/Main'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import {AppLoading} from 'expo'
import * as Font from 'expo-font';
import { Text, View, StyleSheet } from 'react-native';


const store = ConfigureStore();
console.disableYellowBox = true;

let customFonts = {
    "Kalam-Bold" : require ('./assets/fonts/Kalam-Bold.ttf'),
    "Kalam-Regular" : require ('./assets/fonts/Kalam-Regular.ttf'),
    "Kalam-Light" : require ('./assets/fonts/Kalam-Light.ttf'),
    "AmaticSC-Bold" : require ('./assets/fonts/AmaticSC-Bold.ttf'),
    "AmaticSC-Regular" : require ('./assets/fonts/AmaticSC-Regular.ttf'),
   
  };
  
  export default class App extends React.Component {
    state = {
      fontsLoaded: false,
    };
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }


    componentDidMount() {
      this._loadFontsAsync();
    }
  
    render() {
      if (this.state.fontsLoaded) {
        return (
            <Provider store={store}>       
            <Main  />
           </Provider> 
          
        )
      } else {
        return <AppLoading />;
      }
    }
  }
  

/* let customFonts = {
    "Kalam-Bold" : require ('./assets/fonts/Kalam-Bold.ttf')

}; */



/* function App () {
    state = {
        fontsLoaded: false,
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      };
  
    

    componentDidMount() {
        this._loadFontsAsync();
    }

    if (this.state.fontsLoaded) {
    return (

        <Provider store={store}>       
                <Main />
        </Provider>
    );
    } esle {
        return <AppLoading />;
    }
}

export default App;
  */