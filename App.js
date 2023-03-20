import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/component/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
      <Text>Foto de gatinho</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
    backgroundColor:'pink',
  },
  content: {
    justifyContent: "center",
    
  },
  gatinhos: {

    width: 40,
    height: 60,

  },

});
