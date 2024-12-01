import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlarmCard = ({ type, time, zone, icon, editIcon }) => {
  return (
    <View style={styles.alarm}>
      <Text style={styles.type}>{type}</Text>
      <View style={styles.time}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.customTime}>
          <Text style={styles.hours}>{time}</Text>
          <Text style={styles.zone}>{zone}</Text>
        </View>
        <Image source={editIcon} style={styles.icon} />
      </View>
    </View>
  );
};

const Alarm = () => {
  return (
    <View style={styles.alarmContainer}>
      <AlarmCard
        type="In-bed"
        time="10:00"
        zone="PM"
        icon={require("@/assets/svg/bed.svg")}
        editIcon={require("@/assets/svg/edit.svg")}
      />
      <View style={styles.divider} />
      <AlarmCard
        type="In-bed"
        time="10:00"
        zone="PM"
        icon={require("@/assets/svg/bed.svg")}
        editIcon={require("@/assets/svg/edit.svg")}
      />
    </View>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  alarmContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 32,
    gap: 16,
  },
  alarm: {
    flex: 1,
    gap: 8,
  },
  type: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    color: "#A791B2",
    textAlign: "center",
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#413161",
  },
  customTime: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
  },
  hours: {
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 24,
    color: "#EFEBF1",
  },
  zone: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: "#EFEBF1",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
