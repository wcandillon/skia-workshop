import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const pages = [
    // 1. Draw
    {
      name: '🎨 Draw',
      route: '/pages/draw1',
    },
    // 2. Animate
    {
      name: '🐎 Animate',
      route: '/pages/animate',
    },
    // 3. Move
    {
      name: '👋 Move',
      route: '/pages/move',
    },
    // 4. Style
    {
      name: '💅 Style',
      route: '/pages/style',
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Pages Directory
      </ThemedText>

      <ThemedText style={styles.description}>
        Below is a list of pages from the pages directory. Click on any page to navigate to it.
      </ThemedText>

      <FlatList
        data={pages}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Link href={item.route as any} asChild>
            <TouchableOpacity style={styles.pageItem}>
              <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
            </TouchableOpacity>
          </Link>
        )}
        ListEmptyComponent={
          <ThemedText style={styles.emptyText}>
            No pages found. Run "npm run update-pages" after adding new files.
          </ThemedText>
        }
      />
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
  emptyText: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
  note: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
});
