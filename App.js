/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewBase,
  ImageBackground,
  Image,
  Button,
  Alert,
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    

    
      <View style={{flex:1,flexDirection: "column", backgroundColor:'white'}}>

        <View style={styles.header}>
          
        </View>

        
       
       
        <ImageBackground source={require('./assets/bgImage.png')} style={{width: '100%', height: '100%', flex: 1,}}>
        <View style={styles.middle}>
                <Text style={{fontSize: 16, paddingTop: '5%', paddingLeft: '4%', fontFamily: "Roboto"}}>
                  Physical coaching not avalable right now due to current pandemic. Thankyou
                </Text>
        </View>
        <View>
                <Text style={{marginTop:'15%', marginLeft: '18%'}}>
                  Live Coaching
                </Text>
                <Text style={{marginTop:'15%', position: 'absolute', left: '55%'}}>
                  Physical Coaching
                </Text>
        </View>

        <View style={styles.menuItem}>
          <Text style={{fontSize: 8, marginTop: '5%', color: 'white' }}>
            Price/Session  
          </Text>
          <Text style={{fontSize: 8, marginTop: '5%', color: 'white'}}>
            Price/4Session  
          </Text>
          <Text style={{fontSize: 8, marginTop: '5%', color: 'white'}}>
            Price/5Session  
          </Text>
          <Text style={{fontSize: 8, marginTop: '5%', color: 'white'}}>
            Duration 
          </Text>  
        </View>
        
        <View style={styles.menuPrice}>
          <Text style={{fontSize: 8, marginTop: '20%', color: 'white' }}>
           8000  
          </Text>
          <Text style={{fontSize: 8, marginTop: '18%', color: 'white'}}>
            20000  
          </Text>
          <Text style={{fontSize: 8, marginTop: '15%', color: 'white'}}>
            25000  
          </Text>
          <Text style={{fontSize: 8, marginTop: '10%', color: 'white'}}>
            40 Minutes 
          </Text>  
        </View>
        


        <View style={styles.menuItem2}>
          <Text style={{fontSize: 8, marginTop: '5%', color: 'white' }}>
            Price/Session  
          </Text>
          <Text style={{fontSize: 8, marginTop: '15%', color: 'white'}}>
            Price/4Session  
          </Text>
          <Text style={{fontSize: 8, marginTop: '15%', color: 'white'}}>
            Price/5Session  
          </Text>
          <Text style={{fontSize: 8, marginTop: '15%', color: 'white'}}>
            Duration 
          </Text> 
          <Button 
            color="green"
            font
            title="SUBMIT"
            onPress={() => Alert.alert('Simple Button pressed')}
          /> 
        </View>
        
        <View style={styles.menuPrice2}>
          <Text style={{fontSize: 8, marginTop: '20%', color: 'white' }}>
           8000  
          </Text>
          <Text style={{fontSize: 8, marginTop: '25%', color: 'white'}}>
            20000  
          </Text>
          <Text style={{fontSize: 8, marginTop: '23%', color: 'white'}}>
            25000  
          </Text>
          <Text style={{fontSize: 8, marginTop: '15%', color: 'white'}}>
            40 Minutes 
          </Text>  
        </View>


        </ImageBackground>

       
      </View>
    
  );
};

const styles = StyleSheet.create({
  title:{
    color: '#009900',
  },
  menuItem:{
    marginTop: '35%',
    marginLeft: '20%',
    
  },
  menuPrice:{
    position: 'absolute',
    marginTop: '86%',
    marginLeft: '33.33%',

  },
  menuItem2:{
    marginTop: '88%',
    marginLeft: '60%',
    position: 'absolute',
    
  },
  menuPrice2:{
    position: 'absolute',
    marginTop: '88%',
    marginLeft: '74%',

  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#009900'
  },
  middle: {
    width:'80%',
    backgroundColor: '#D3D3D3',
    height: '12.5%',
    marginTop: '5%',
    marginRight: '10%',
    marginLeft: '10%',
    marginBottom: '5%' ,
  },


  
});

export default App;
