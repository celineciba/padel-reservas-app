import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Booking } from '../types/booking';
import { colors } from '../theme/colors';

type BookingCardProps = {
  booking: Booking;
};

export function BookingCard({ booking }: BookingCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.courtName}>{booking.courtName}</Text>
        <Text style={styles.players}>{booking.playerCount} players</Text>
      </View>

      <Text style={styles.meta}>
        {booking.date} • {booking.slot}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 10
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
  },
  courtName: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600'
  },
  players: {
    color: colors.neon,
    fontWeight: '700'
  },
  meta: {
    color: colors.textSecondary
  }
});
