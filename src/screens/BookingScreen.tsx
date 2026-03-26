import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { BookingCard } from '../components/BookingCard';
import { BrandHeader } from '../components/BrandHeader';
import { colors } from '../theme/colors';
import { Booking } from '../types/booking';

const today = new Date().toISOString().slice(0, 10);

const seedBookings: Booking[] = [
  {
    id: '1',
    courtName: 'Court A',
    date: today,
    slot: '18:00 - 19:30',
    playerCount: 4
  },
  {
    id: '2',
    courtName: 'Court B',
    date: today,
    slot: '20:00 - 21:30',
    playerCount: 3
  }
];

export function BookingScreen() {
  const [bookings, setBookings] = useState<Booking[]>(seedBookings);
  const [courtName, setCourtName] = useState('Court C');
  const [slot, setSlot] = useState('19:00 - 20:30');
  const [playerCount, setPlayerCount] = useState('4');

  const canBook = useMemo(() => {
    const players = Number(playerCount);

    return courtName.trim().length > 0 && slot.trim().length > 0 && Number.isInteger(players) && players > 0;
  }, [courtName, slot, playerCount]);

  const createBooking = () => {
    if (!canBook) {
      return;
    }

    const next: Booking = {
      id: String(Date.now()),
      courtName: courtName.trim(),
      date: today,
      slot: slot.trim(),
      playerCount: Number(playerCount)
    };

    setBookings((previous) => [next, ...previous]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <BrandHeader />

      <View style={styles.form}>
        <Text style={styles.formTitle}>Create booking</Text>

        <TextInput
          value={courtName}
          onChangeText={setCourtName}
          placeholder="Court name"
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
        />

        <TextInput
          value={slot}
          onChangeText={setSlot}
          placeholder="Slot (e.g. 18:00 - 19:30)"
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
        />

        <TextInput
          value={playerCount}
          onChangeText={setPlayerCount}
          placeholder="Players"
          placeholderTextColor={colors.textSecondary}
          keyboardType="number-pad"
          style={styles.input}
        />

        <Pressable style={[styles.button, !canBook && styles.buttonDisabled]} onPress={createBooking}>
          <Text style={styles.buttonText}>Book court</Text>
        </Pressable>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Upcoming bookings</Text>
        <Text style={styles.badge}>{bookings.length}</Text>
      </View>

      {bookings.map((booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    padding: 16,
    paddingBottom: 26
  },
  form: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18
  },
  formTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10
  },
  input: {
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: colors.neon,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 2
  },
  buttonDisabled: {
    backgroundColor: colors.neonMuted
  },
  buttonText: {
    color: '#001A0B',
    fontWeight: '800'
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  listTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700'
  },
  badge: {
    color: colors.neon,
    fontWeight: '700',
    borderColor: colors.neon,
    borderWidth: 1,
    borderRadius: 999,
    minWidth: 28,
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2
  }
});
