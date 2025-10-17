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
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 380,
    minHeight: 220,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: 'space-between',
  },
  emoji: {
    fontSize: 40,
    marginBottom: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
    textAlign: 'center',
  },
  description: {
    color: '#6b7280',
    marginBottom: 20,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#93C5FD', // Azul pastel
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1E40AF', // Azul oscuro para contraste
    fontWeight: 'bold',
    fontSize: 16,
  },
});