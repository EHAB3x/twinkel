import { Image, StyleSheet, Text, View } from "react-native";

const SleepTrack = () => {
  return (
    <>
      <div style={styles.sleepTrack}>
        <div style={styles.routine}>
          <Image source={require("@/assets/svg/sleep.svg")} />
          <Text style={styles.routineText}>Sleep Routine</Text>
        </div>

        <Text style={styles.routineTime}>08h 30m</Text>
      </div>

      <div style={styles.progress}>
        <div style={styles.thumb}></div>
      </div>

      <View style={styles.times}>
        <Text style={styles.timeText}>12PM</Text>
        <Text style={styles.timeText}>6PM</Text>
        <Text style={styles.timeText}>12AM</Text>
        <Text style={styles.timeText}>6AM</Text>
        <Text style={styles.timeText}>12PM</Text>
      </View>
    </>
  );
};

export default SleepTrack;

const styles = StyleSheet.create({
  sleepTrack: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
  },
  routine: {
    display: "flex",
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
  },
  progress: {
    display: "block",
    width: "100%",
    height: 16,
    backgroundColor: "#230361",
    marginTop: 10,
    borderRadius: 10,
    position: "relative",
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  timeText: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    color:"#A791B2"
  },
});
