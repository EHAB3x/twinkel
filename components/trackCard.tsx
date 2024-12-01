import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TrackCard = () => {
  return (
    <View style={styles.trackCard}>
      {/* Time Section */}
      <View style={styles.time}>
        <Image
          source={require("@/assets/svg/sleep.svg")}
          style={styles.icon}
        />
        <Text style={styles.timeHours}>06h 41m</Text>
      </View>

      {/* Progress Section */}
      <View style={styles.progress}>
        <Image
          source={require("@/assets/svg/up-arrow.svg")}
          style={styles.icon}
        />
        <Text style={styles.progressText}>21min more than yesterday</Text>
      </View>

      {/* Stats Section */}
      <TouchableOpacity style={styles.stats}>
        <Text style={styles.statsText}>See stats</Text>
        <Image
          source={require("@/assets/svg/right-arrow.svg")}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Background Image */}
      <Image
        source={require("@/assets/images/SleepGraph.png")}
        style={styles.background}
        resizeMode="contain"
      />
    </View>
  );
};

export default TrackCard;

const styles = StyleSheet.create({
  trackCard: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#230361",
    borderRadius: 12,
    marginTop: 24,
    position: "relative",
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  timeHours: {
    fontSize: 32,
    fontWeight: "400",
    lineHeight: 40,
    color: "#EFEBF1",
    marginLeft: 10,
  },
  progress: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginLeft: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    color: "#EFEBF180",
    marginLeft: 4,
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  statsText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    color: "#4074D8",
    marginRight: 8,
  },
  background: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 200,
    height: 120,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
