import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SleepTrack = () => {
  return (
    <View>
      {/* Sleep Track Header */}
      <View style={styles.sleepTrack}>
        <View style={styles.routine}>
          <Image source={require("@/assets/svg/sleep.svg")} />
          <Text style={styles.routineText}>Sleep Routine</Text>
        </View>
        <Text style={styles.routineTime}>08h 30m</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progress}>
        <View style={styles.thumb} />
      </View>

      {/* Time Labels */}
      <View style={styles.times}>
        <Text style={styles.timeText}>12PM</Text>
        <Text style={styles.timeText}>6PM</Text>
        <Text style={styles.timeText}>12AM</Text>
        <Text style={styles.timeText}>6AM</Text>
        <Text style={styles.timeText}>12PM</Text>
      </View>
    </View>
  );
};

export default SleepTrack;

const styles = StyleSheet.create({
  sleepTrack: {
    display:"flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
  },
  routine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  routineText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    color: "#F8F4FF",
  },
  routineTime: {
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 24,
    color: "#FFFFFF",
    marginTop: 8,
  },
  progress: {
    width: "100%",
    height: 16,
    backgroundColor: "#230361",
    marginTop: 10,
    borderRadius: 10,
    position: "relative",
    overflow: "hidden",
  },
  thumb: {
    position: "absolute",
    right: "25%",
    width: "37%",
    height: "100%",
    backgroundColor: "#4074D8",
    borderRadius: 4,
  },
  times: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  timeText: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    color: "#A791B2",
  },
});
