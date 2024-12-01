import TrackCard from '@/components/trackCard';
import WatchCard from '@/components/watchCard';
import SleepTrack from '@/components/SleepTrack';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <View style={styles.userDetails}>
          <Text style={styles.welcomeText}>Welcome, Ihab 👋</Text>
          <Text style={styles.dateText}>01 Dec, 2024</Text>
        </View>
        <Image
          source={require('@/assets/images/Profile_Image.png')}
          style={styles.avatar}
        />
      </View>

      <WatchCard />

      <TrackCard />

      <SleepTrack />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#180147',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  userDetails: {
    flexDirection: 'column',
    gap:4
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    color: '#EFEBF1',
  },
  dateText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: '#EFEBF1',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20, 
  },
});
