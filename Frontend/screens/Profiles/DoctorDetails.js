import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import {ArrowBackIcon} from "react-native-vector-icons"
import { Ionicons } from '@expo/vector-icons';

import COLORS from "../../components/Colors";
import StarRating from "react-native-star-rating";

const DoctorDetails = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headingContainer}>
     
      <Pressable
        // onPress={() => navigation.navigate("Home")}
        >
        <Image
        source={require("../../assets/retour.png")}
        style={styles.return}
      />
        </Pressable>
        
        <Text style={styles.heading}>Details</Text>
      </View>

      {/* Profile image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/doctor.png")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>DR. Ben Hmida</Text>
      </View>

      {/* Profile about */}
      <View style={styles.aboutContainer}>
        <View>
          <Text style={styles.info}>Experience: 2 years</Text>
          <View>
            <Text style={styles.info}>Rate</Text>

            <StarRating
              disabled={false}
              maxStars={5}
              rating={3.5} // Replace with your actual rating value
              starSize={34}
              marginRight={-12}
              fullStarColor="#FFD700"
              emptyStarColor="#CCCCCC"
              //   selectedStar={onStarRatingPress}
            />
          </View>
        </View>

        <Text style={styles.info}>About</Text>
        <Text style={styles.infoText}>
          Dr. Ben Hmida is a medical doctor with a background in pharmacy. His
          expertise lies in medicine, pharmacy and pharmaceutical industry.
        </Text>
        <Pressable
        // onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btn}>Book Now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  headingContainer: {
    position: "absolute",
    alignItems: "center",
    backgroundColor: "#1C6BA4",
    height: 170,
    width: "100%",
    paddingVertical: 10,
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -35,
  },
  btn: {
    fontSize: 25,
    marginTop: 70,
    height: 38,
    color: COLORS.white,
    backgroundColor: "#1C6BA4",
    alignContent: "center",
    textAlign: "center",
    borderRadius: 40,
    fontWeight: "bold",
    marginLeft: 6,
  },

  imageContainer: {
    alignContent: "center",
    zIndex: 9999,
    alignItems: "center",
    // marginVertical: 50,
    marginTop: 120,
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
  },
  aboutContainer: {
    height: "30%",
    width: "95%",
    textAlign: "center",
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    borderRadius: 30,
    color: "black",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 5,
    color: "black",
  },
  info: {
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 5,
    color: "black",
  },
  infoText: {
    fontSize: 18,
    fontWeight: "normal",
    paddingVertical: 5,
    color: "black",
  },
  starStyle: {
    marginRight: -3,
  },
  return:{
    height:40,
    width:40,
    marginTop:35,
    marginLeft:-180,
  }
});
