import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { DefaultCard } from '../../components/Cards/DefaultCard';
import { FeaturedCard } from '../../components/Cards/FeaturedCard';
import { CompactCard } from '../../components/Cards/CompactCard';

type Styles = {
  container: ViewStyle;
  scrollView: ViewStyle;
  contentContainer: ViewStyle;
  headerContainer: ViewStyle;
  headerTitle: TextStyle;
  headerSubtitle: TextStyle;
  sectionContainer: ViewStyle;
  sectionTitle: TextStyle;
  cardsContainer: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  headerContainer: {
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    width: '100%',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  sectionContainer: {
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 16,
  },
  cardsContainer: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
    gap: 16,
    paddingHorizontal: 16,
  },
});

export default function CardsScreen() {
  const handlePress = (cardName: string) => {
    Alert.alert('Card Pressed', `You pressed the ${cardName} card!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Componentes Card</Text>
          <Text style={styles.headerSubtitle}>Ejemplos de variantes</Text>
        </View>

        {/* Default Cards Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Default Cards</Text>
          <View style={styles.cardsContainer}>
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
        </View>

        {/* Featured Cards Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Featured Cards</Text>
          <View style={styles.cardsContainer}>
            <FeaturedCard
              title="Curso Full Stack"
              description="¡Conviértete en desarrollador full stack! Aprende frontend, backend y bases de datos"
              emoji="🚀"
              badge="DESTACADO"
              onPress={() => handlePress('Curso Full Stack')}
            />
          </View>
        </View>

        {/* Compact Cards Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Compact Cards</Text>
          <View style={styles.cardsContainer}>
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
              title="Git & GitHub"
              description="Control de versiones y colaboración"
              emoji="🔄"
              onPress={() => handlePress('Git & GitHub')}
            />
            <CompactCard
              title="Base de Datos"
              description="SQL y NoSQL"
              emoji="💾"
              onPress={() => handlePress('Base de Datos')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}