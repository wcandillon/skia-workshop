import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function HelloPage() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Hello Page' }} />
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.description}>This is a sample page in the pages directory.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
}); 