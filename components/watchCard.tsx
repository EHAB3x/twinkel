import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const WatchCard = () => {
  return (
    <View style={styles.watchCard}>
      <View style={styles.cardDetails}>
        <Text style={styles.cardDesc}>Connect your watch Now 🤩</Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.buttonText}>Press Connect</Text>
        </TouchableOpacity>
      </View>
      <Image source={require("@/assets/images/watch.png")} style={styles.cardImage} />
    </View>
  );
};

export default WatchCard;

const styles = StyleSheet.create({
  watchCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#230361",
    borderRadius: 12,
    marginTop:24
  },
  cardDetails: {
    display:"flex",
    gap:10,
    flex: 1,
    marginRight: 16,
  },
  cardDesc: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: "#EFEBF1",
    marginBottom: 10,
  },
  cardButton: {
    backgroundColor: "#4A12B8",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    width: 120,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#F8F4FF",
    textAlign: "center",
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
