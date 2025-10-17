import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type CompactCardProps = {
  title: string;
  description: string;
  emoji: string;
  onPress: () => void;
};

export function CompactCard({ title, description, emoji, onPress }: CompactCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={1}>{description}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.arrowContainer}>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    maxWidth: 380,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  emoji: {
    fontSize: 28,
    marginRight: 16,
    backgroundColor: '#EFF6FF', // Azul pastel muy claro
    padding: 12,
    borderRadius: 12,
    width: 52,
    height: 55,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  content: {
    flex: 1,
    paddingRight: 8,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A', // Azul muy oscuro
    marginBottom: 4,
  },
  description: {
    color: '#3B82F6', // Azul medio
    fontSize: 14,
  },
  arrow: {
    fontSize: 20,
    color: '#60A5FA', // Azul pastel
    fontWeight: 'bold',
  },
  arrowContainer: {
    padding: 8,
    marginLeft: 8,
  },
});