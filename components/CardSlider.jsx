import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

const cards = [
  {
    id: "1",
    doctorImage: require("@/assets/images/ProfileImage.png"), // Use require for image
    doctorName: "Dr. Maria Waston",
    description: "Psychological consultant",
  },
  {
    id: "2",
    doctorImage: require("@/assets/images/ProfileImage.png"),
    doctorName: "Dr. Maria Waston",
    description: "Psychological consultant",
  },
  {
    id: "3",
    doctorImage: require("@/assets/images/ProfileImage.png"),
    doctorName: "Dr. Maria Waston",
    description: "Psychological consultant",
  },
  {
    id: "4",
    doctorImage: require("@/assets/images/ProfileImage.png"),
    doctorName: "Dr. Maria Waston",
    description: "Psychological consultant",
  },
  {
    id: "5",
    doctorImage: require("@/assets/images/ProfileImage.png"),
    doctorName: "Dr. Maria Waston",
    description: "Psychological consultant",
  },
];

// Card Component
const Card = ({ doctorImage, name, description, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
    <View style={styles.card}>
      <Image style={styles.doctorImage} source={doctorImage} />
      <Text style={styles.doctorName}>{name}</Text>
      <Text style={styles.doctorDescription}>{description}</Text>

      <TouchableOpacity style={styles.appointmentBtn}>
        <Text style={styles.appointmentBtnText}>Appointment</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const CardSlider = () => {
  const handleCardPress = (name) => {
    alert(`You pressed ${name}`);
  };

  const renderCard = ({ item }) => (
    <Card
      doctorImage={item.doctorImage}
      name={item.doctorName}
      description={item.description}
      onPress={() => handleCardPress(item.doctorName)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={width * 0.8 + 16} // Adjust if necessary
        decelerationRate="fast"
        renderItem={renderCard}
      />
    </View>
  );
};

export default CardSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    marginTop: 32,
  },
  card: {
    minWidth: 150,
    backgroundColor: "#230361",
    borderRadius: 16,
    marginHorizontal: 8,
    display: "flex",
    gap:8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    padding: 16, // Add padding here
  },
  doctorImage: {
    width: 104,
    height: 104,
    borderRadius: 12,
  },
  doctorName: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 19,
    color: "#F2ECFF",
  },
  doctorDescription: {
    fontSize: 8,
    fontWeight: "400",
    lineHeight: 13.25,
    color: "#A791B2",
  },
  appointmentBtn: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 12,
    backgroundColor: "#4A12B8",
    width: "100%",
    textAlign: "center",
  },
  appointmentBtnText: {
    color: "#F8F4FF",
    fontFamily: "Roboto",
    textAlign:"center",
  },
});