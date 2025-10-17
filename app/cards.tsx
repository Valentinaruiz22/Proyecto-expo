import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { DefaultCard } from '../components/Cards/DefaultCard';
import { FeaturedCard } from '../components/Cards/FeaturedCard';
import { CompactCard } from '../components/Cards/CompactCard';

export default function CardsScreen() {
  const handlePress = (cardName: string) => {
    Alert.alert('Card Pressed', `You pressed the ${cardName} card!`);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f3f4f6' }}>
      {/* Header */}
      <View style={{ padding: 20, marginBottom: 16, alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#111827', marginBottom: 8 }}>
          Componentes Card
        </Text>
        <Text style={{ fontSize: 16, color: '#6b7280' }}>
          Ejemplos de variantes
        </Text>
      </View>

      {/* Default Cards Section */}
      <View style={{ 
        padding: 20,
        alignItems: 'center',
        maxWidth: 420,
        width: '100%',
        alignSelf: 'center',
        gap: 16
      }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, alignSelf: 'flex-start' }}>Default Cards</Text>
        <DefaultCard
          title="React Native"
          description="Framework para crear aplicaciones móviles multiplataforma"
          emoji="📱"
          onPress={() => handlePress('React Native')}
        />
        <DefaultCard
          title="Desarrollo Web"
          description="Aprende las tecnologías más demandadas en desarrollo web"
          emoji="💻"
          onPress={() => handlePress('Desarrollo Web')}
        />
      </View>

      {/* Featured Cards Section */}
      <View style={{ 
        padding: 20,
        alignItems: 'center',
        maxWidth: 420,
        width: '100%',
        alignSelf: 'center',
        gap: 16
      }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, alignSelf: 'flex-start' }}>Featured Cards</Text>
        <FeaturedCard
          title="Curso Full Stack"
          description="¡Conviértete en desarrollador full stack! Aprende frontend, backend y bases de datos"
          emoji="🚀"
          badge="DESTACADO"
          onPress={() => handlePress('Curso Full Stack')}
        />
      </View>

      {/* Compact Cards Section */}
      <View style={{ 
        padding: 20,
        alignItems: 'center',
        maxWidth: 420,
        width: '100%',
        alignSelf: 'center',
        gap: 16
      }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, alignSelf: 'flex-start' }}>Compact Cards</Text>
        <CompactCard
          title="HTML & CSS"
          description="Fundamentos del desarrollo web"
          emoji="🎨"
          onPress={() => handlePress('HTML & CSS')}
        />
        <CompactCard
          title="JavaScript"
          description="El lenguaje de la web"
          emoji="⚡"
          onPress={() => handlePress('JavaScript')}
        />
        <CompactCard
          title="Base de Datos"
          description="SQL y NoSQL"
          emoji="💾"
          onPress={() => handlePress('Base de Datos')}
        />
      </View>
    </ScrollView>
  );
}