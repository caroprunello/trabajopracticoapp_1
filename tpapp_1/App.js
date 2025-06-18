import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConsumoJSON from './components/ConsumoJSON';

export default function App() {
  return (
    <View style={styles.container}>
      <ConsumoJSON></ConsumoJSON>
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
  },
});
