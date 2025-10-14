import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type CompactCardProps = {
  title: string;
  description: string;
  emoji: string;
  onPress: () => void;
};

export function CompactCard({ title, description, emoji, onPress }: CompactCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.emoji}>{emoji}</Text>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={1}>{description}</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  emoji: {
    fontSize: 20,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  description: {
    color: '#6b7280',
    fontSize: 14,
  },
  arrow: {
    fontSize: 20,
    color: '#3b82f6',
  },
});