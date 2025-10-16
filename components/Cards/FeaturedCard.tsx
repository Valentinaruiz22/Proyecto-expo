import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type FeaturedCardProps = {
  title: string;
  description: string;
  emoji: string;
  onPress: () => void;
  badge?: string;
};

export function FeaturedCard({ title, description, emoji, onPress, badge = 'DESTACADO' }: FeaturedCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
        
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
    backgroundColor: '#BFDBFE', // Azul pastel claro
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 380,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badgeContainer: {
    backgroundColor: '#93C5FD', // Azul pastel más oscuro
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 16,
  },
  badgeText: {
    color: '#1E40AF', // Azul oscuro para contraste
    fontWeight: 'bold',
    fontSize: 14,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A', // Azul muy oscuro
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    color: '#1E40AF', // Azul oscuro
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#60A5FA', // Azul pastel medio
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});