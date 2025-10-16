import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Alert,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { ContactCard } from '../../components/ContactCard';
import { contacts } from '../../data/contacts';
import { Contact } from '../../types/Contact';

export default function ContactsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = React.useMemo(() => {
    const query = searchQuery.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query) ||
      contact.profession.toLowerCase().includes(query) ||
      contact.company?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleContactPress = (contact: Contact) => {
    Alert.alert(
      contact.name,
      `Email: ${contact.email}\nTeléfono: ${contact.phone}\nProfesión: ${contact.profession}${contact.company ? '\nEmpresa: ' + contact.company : ''}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contactos</Text>
        <Text style={styles.headerCount}>
          {filteredContacts.length} contactos
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar contactos..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#666"
        />
      </View>

      {/* Contact List */}
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ContactCard contact={item} onPress={handleContactPress} />
        )}
        contentContainerStyle={styles.listContainer}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={8}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No se encontraron contactos</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  } as ViewStyle,

  header: {
    backgroundColor: '#3b82f6',
    padding: 16,
    paddingTop: 20,
    width: '100%',
  } as ViewStyle,

  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  } as TextStyle,

  headerCount: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
  } as TextStyle,

  searchContainer: {
    padding: 16,
    width: '100%',
  } as ViewStyle,

  searchInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  } as TextStyle,

  listContainer: {
    width: '100%',
    maxWidth: 600,
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: 'center',
  } as ViewStyle,

  emptyContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  } as TextStyle,
});