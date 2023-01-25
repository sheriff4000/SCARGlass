import * as React from 'react';
import { Text, View,  StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';



///////////////////////////////////////
//// EVERYTHING ABOUT HOMESCREEN STUFF

// TAB constaining stack components (everything on that screen)
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
 return (
   <HomeStack.Navigator
   screenOptions={{
    headerShown: false
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Layout" component={LayoutScreen} />
   </HomeStack.Navigator>
  );
}

// Stack components
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function LayoutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Layout!</Text>
    </View>
  );
}
//////////////////////////////////////////
//////////////////////////////////////////

// TAB constaining stack components (everything on that screen)
const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

// stack components
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Layout!</Text>
    </View>
  );
}


//////////////////////////////////////
//////////////////////////////////////

// TAB constaining stack components (everything on that screen)
const ResponsesStack = createNativeStackNavigator();
function ResponsesStackScreen() {
  return (
    <ResponsesStack.Navigator
      screenOptions={{
      headerShown: false
    }}>
      <ResponsesStack.Screen name="ResponsesScreen" component={ResponsesScreen} />
      <ResponsesStack.Screen name="PicturesScreen" component={PicturesScreen} />
      <ResponsesStack.Screen name="ChatGPTresponses" component={ChatGPTresponses} />
    </ResponsesStack.Navigator>
  );
}

//stack components
function ResponsesScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Button
        title="Pictures"
        onPress={() => navigation.navigate('PicturesScreen')}
      />
      <Button
        title="ChatGPT"
        onPress={() => navigation.navigate('ChatGPTresponses')}
      />

      <Button
        title="Coming soon!!"
        onPress={() => navigation.navigate('ChatGPTresponses')}
      />
    </View>
  );
}
function PicturesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pictures</Text>
    </View>
  );
}

function ChatGPTresponses() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ChatGPTresponses</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
//////////////////////////////
// Button styling
function Button({onPress, title}) {
  // const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 50,
    lineHeight: 80,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});




//////////////////////////////
//////////////////////////////

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Responses') {
              iconName = focused ? 'ios-albums' : 'ios-albums-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Responses" component={ResponsesStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



