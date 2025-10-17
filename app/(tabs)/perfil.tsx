import { Image, ImageStyle, SafeAreaView, ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Tarjeta de Perfil Principal */}
        <View style={styles.profileCard}>
          {/* Foto de perfil circular */}
          <Image
            source={require('../../assets/images/profile/profile-photo.jpg.jpeg')}
            style={styles.profilePhoto}
          />
          
          {/* Nombre y profesión */}
          <Text style={styles.name}>Valentina Ruiz</Text>
          <Text style={styles.profession}>Desarrolladora de software</Text>

          {/* Divisor */}
          <View style={styles.divider} />

          {/* Información de contacto */}
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>
              📧 Email: 202215.clv@gmail.com
            </Text>
            <Text style={styles.contactItem}>
              📱 Teléfono: 3204482812
            </Text>
            <Text style={styles.contactItem}>
              📍 Ciudad: Bogotá
            </Text>
          </View>
        </View>

        {/* Tarjeta Sobre mí */}
        <View style={styles.aboutCard}>
          <Text style={styles.sectionTitle}>
            Sobre mí
          </Text>
          <Text style={styles.aboutText}>
            Soy una mujer que estudia Análisis y Desarrollo de Software y me encanta aprender sobre tecnología y programación.
            Me considero responsable y dedicada, y siempre trato de dar lo mejor de mí en cada proyecto y desafío que se me presenta.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // bg-gray-100
    alignItems: 'center',
  } as ViewStyle,

  scrollContent: {
    padding: 16,
    paddingTop: 32,
    alignItems: 'center',
    maxWidth: 480,
    alignSelf: 'center',
    width: '100%',
  } as ViewStyle,

  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
    width: '90%',
    maxWidth: 400,
  } as ViewStyle,

  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#3faac2ff',
  } as ImageStyle,

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
  } as TextStyle,

  profession: {
    fontSize: 18,
    color: '#4b5563',
    marginTop: 4,
  } as TextStyle,

  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    width: '100%',
    marginVertical: 16,
  } as ViewStyle,

  contactInfo: {
    width: '100%',
  } as ViewStyle,

  contactItem: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 12,
  } as TextStyle,

  aboutCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '90%',
    maxWidth: 400,
  } as ViewStyle,

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  } as TextStyle,

  aboutText: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
  } as TextStyle,
});