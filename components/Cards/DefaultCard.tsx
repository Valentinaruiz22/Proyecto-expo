import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type DefaultCardProps = {
  title: string;
  description: string;
  emoji: string;
  onPress: () => void;
};

export function DefaultCard({ title, description, emoji, onPress }: DefaultCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
  },
  description: {
    color: '#6b7280',
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});