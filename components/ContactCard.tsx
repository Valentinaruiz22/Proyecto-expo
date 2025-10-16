import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { Contact } from '../types/Contact';

interface ContactCardProps {
  contact: Contact;
  onPress: (contact: Contact) => void;
}

export function ContactCard({ contact, onPress }: ContactCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TouchableOpacity 
      style={[
        styles.card,
        isExpanded && styles.cardExpanded
      ]} 
      onPress={() => setIsExpanded(!isExpanded)}
      activeOpacity={0.7}
    >
      <View style={styles.mainContent}>
        <View style={[
          styles.avatarContainer,
          { backgroundColor: imageError ? '#e5e7eb' : '#f3f4f6' }
        ]}>
          {imageError ? (
            <View style={styles.initialContainer}>
              <Text style={styles.initialText}>
                {contact.name.charAt(0).toUpperCase()}
              </Text>
            </View>
          ) : (
            <Image
              source={{ uri: contact.avatar }}
              style={styles.avatar}
              onError={() => setImageError(true)}
            />
          )}
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.profession}>{contact.profession}</Text>
          <Text style={styles.phone}>{contact.phone}</Text>
          {contact.company && (
            <Text style={styles.company}>{contact.company}</Text>
          )}
        </View>
      </View>

      {isExpanded && (
        <View style={styles.expandedContent}>
          <View style={styles.separator} />
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Email:</Text>
              <Text style={styles.detailText}>{contact.email}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Teléfono:</Text>
              <Text style={styles.detailText}>{contact.phone}</Text>
            </View>
            {contact.company && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Empresa:</Text>
                <Text style={styles.detailText}>{contact.company}</Text>
              </View>
            )}
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Profesión:</Text>
              <Text style={styles.detailText}>{contact.profession}</Text>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,

  cardExpanded: {
    paddingBottom: 8,
  } as ViewStyle,

  mainContent: {
    flexDirection: 'row',
  } as ViewStyle,

  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    backgroundColor: '#f3f4f6',
    overflow: 'hidden',
  } as ViewStyle,

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  } as ImageStyle,

  initialContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e7eb',
  } as ViewStyle,

  initialText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b5563',
  } as TextStyle,

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  } as ViewStyle,

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  } as TextStyle,

  profession: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 4,
  } as TextStyle,

  phone: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  } as TextStyle,

  company: {
    fontSize: 12,
    color: '#3b82f6',
    fontWeight: '500',
  } as TextStyle,

  expandedContent: {
    marginTop: 12,
  } as ViewStyle,

  separator: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 12,
  } as ViewStyle,

  detailsContainer: {
    paddingHorizontal: 4,
  } as ViewStyle,

  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  } as ViewStyle,

  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4b5563',
    width: 80,
  } as TextStyle,

  detailText: {
    fontSize: 14,
    color: '#6b7280',
    flex: 1,
  } as TextStyle,
});