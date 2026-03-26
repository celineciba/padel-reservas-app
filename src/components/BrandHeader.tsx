import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { branding } from '../theme/branding';
import { colors } from '../theme/colors';

export function BrandHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.logoText}>{branding.logoPlaceholder}</Text>
      </View>

      <View style={styles.titleWrap}>
        <Text style={styles.title}>{branding.appName}</Text>
        <Text style={styles.subtitle}>Book courts in seconds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  logoBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.neon,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface
  },
  logoText: {
    color: colors.neon,
    fontWeight: '800',
    fontSize: 18
  },
  titleWrap: {
    marginLeft: 12
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700'
  },
  subtitle: {
    color: colors.textSecondary,
    marginTop: 2
  }
});
