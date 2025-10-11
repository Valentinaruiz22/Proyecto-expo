import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f4f6' }}>
      <ScrollView>
        {/* Header con fondo azul */}
        <View style={{ backgroundColor: '#3b82f6', padding: 32, alignItems: 'center' }}>
          {/* Foto de perfil circular */}
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }} // Imagen de perfil temporal

            style={{
              width: 128,
              height: 128,
              borderRadius: 64,
              borderWidth: 4,
              borderColor: 'white'
            }}
          />
          
          {/* Nombre y profesión */}
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>
            Valentina Ruiz
          </Text>
          <Text style={{ color: 'white', fontSize: 18 }}>
            Desarrollador de software
          </Text>
        </View>

        {/* Información de contacto */}
        <View style={{ padding: 24 }}>
          <Text style={{ color: '#1f2937', fontSize: 18, marginBottom: 8 }}>
            📧 Email: 202215.clv@gmail.com
          </Text>
          <Text style={{ color: '#1f2937', fontSize: 18, marginBottom: 8 }}>
            📱 Teléfono: 3204482812
          </Text>
          <Text style={{ color: '#1f2937', fontSize: 18, marginBottom: 16 }}>
            📍 Ciudad: Bogotá
          </Text>

          {/* Sección Sobre mí */}
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#111827', marginBottom: 8 }}>
            Sobre mí:
          </Text>
          <Text style={{ color: '#374151', fontSize: 16, lineHeight: 24 }}>
            Soy un apasionado desarrollador con experiencia en React Native y web development.
            Me encanta crear aplicaciones móviles intuitivas y atractivas que resuelvan
            problemas reales. Cuando no estoy programando, disfruto aprendiendo nuevas
            tecnologías y compartiendo conocimientos con la comunidad de desarrollo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}