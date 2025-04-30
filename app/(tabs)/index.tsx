import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Define the pages - just add to this array when you create new pages
const PAGES = [
  { name: 'Hello Page', route: '/pages/hello' },
  { name: 'About Page', route: '/pages/about' }
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>🎨 Skia Examples</ThemedText>
      
      
      <FlatList
        data={PAGES}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Link href={item.route as any} asChild>
            <TouchableOpacity style={styles.pageItem}>
              <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
            </TouchableOpacity>
          </Link>
        )}
      />
      
      <ThemedText style={styles.note}>
        Note: To add new pages, create new .tsx files in the 'app/pages' directory and update
        the PAGES array in this component.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  pageItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  note: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
});
