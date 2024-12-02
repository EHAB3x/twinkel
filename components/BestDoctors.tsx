import { StyleSheet, View, Text } from "react-native";
import CardSlider from "./CardSlider.jsx"
const BestDoctors = () => {
  return (
    <View style={styles.bestDoctors}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Best Doctors</Text>
        <Text style={styles.showMore}>See all</Text>
      </View>
      <CardSlider />
    </View>
  );
};

export default BestDoctors;

const styles = StyleSheet.create({
  bestDoctors: {
    display: "flex",
    justifyContent:"space-between",
    marginTop: 32,
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 24,
    color: "#EFEBF1",
    flex:1
  },
  showMore: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 24,
    color:"#A791B2"
  },
});
