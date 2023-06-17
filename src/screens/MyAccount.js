import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import firebase from "firebase/app";
import "firebase/database"; // or 'firebase/firestore' for Firestore
import getMembers from "../consts/member";

const Account = ({ userEmail }) => {
  const navigation = useNavigation();
  const [memberData, setMemberData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [profileOptions, setProfileOptions] = useState([
    { label: "1", value: "Option 1" },
    { label: "2", value: "Option 2" },
    { label: "3", value: "Option 3" },
    { label: "4", value: "Option 4" },
    { label: "5", value: "Option 5" },
  ]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetchMemberData();
  }, []);

  const fetchMemberData = async () => {
    try {
      const members = await getMembers();
      console.log(members);
      let member = members[0];
      for (let i = 0; i < members.length; i++) {
        const currentOne = members[i];
        console.log(userEmail);
        console.log("Current one in the array " + currentOne.email);
        if (currentOne.email === userEmail) {
          member = currentOne;
          console.log("Member with the correct email" + member);
          break;
          // setName(member.firstname + "" + member.lastname);
          // setEmail(member.email);
          // setMobile(member.phonenumber);
        }
      }
      setMemberData(member); //Assuming its first members until connected to login
    } catch (error) {
      console.log("Error fetching member data: ", error);
    }
  };

  const fetchProfileOptions = async () => {
    try {
      const profiles = await getProfiles();
      const options = profiles.map((profile) => ({
        label: profile.name,
        value: profile.name,
      }));
      setProfileOptions(options);
    } catch (error) {
      console.log("Error fetching profile options", error);
    }
  };

  const handleProfileSelection = (value) => {
    setSelectedOption(value);
  };

  const handleProfile = () => {
    navigation.navigate("AccountDetails", {
      setting: "AccountDetails",
    });
  };

  const handleFAQ = () => {
    navigation.navigate("FrequentlyAskedQuestions", { setting: "FAQs" });
  };
  const handleSupport = () => {
    navigation.navigate("SupportandFeedback", {
      setting: "SupportandFeedback",
    });
  };

  const optionImage = {
    "Option 1": "https://www.freeimages.com/photo/blue-owl-1345365",
    "Option 2":
      "https://static.vecteezy.com/system/resources/previews/010/804/801/original/cute-penguin-get-mad-ready-to-fight-isolated-cartoon-animal-illustration-flat-style-sticker-icon-design-premium-logo-mascot-character-vector.jpg",
    "Option 3":
      "https://img.freepik.com/premium-vector/cute-sheep-sleeping-cartoon-illustration_257245-267.jpg?w=2000",
    "Option 4":
      "https://img.freepik.com/premium-vector/cute-sloth-winking-eye-cartoon-icon_42750-440.jpg?w=2000",
    "Option 5":
      "https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-paper-cut-animal-head-portrait-cute-cartoon-lion-head-png-image_1772434.jpg",
  };

  const selectedImageSource = optionImage[selectedOption];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{ uri: selectedImageSource }}
              style={styles.image}
              resizeMode="center"
            />
          </View>
        </View>
        <View style={styles.dropdown}>
          <DropDownPicker
            items={profileOptions}
            defaultValue={selectedOption}
            containerStyle={{ backgroundColor: "#4D2959" }}
            itemStyle={{ justifyContent: "flex-start" }}
            dropDownStyle={{ backgroundColor: "#4D2959" }}
            onChangeItem={(item) => handleProfileSelection(item.value)}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Hi, {memberData?.firstname}
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleProfile}>
            <View style={styles.selection}>
              <Text style={styles.selectionTitle}>Account Details</Text>
            </View>
            <View style={styles.rowSpacer} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFAQ}>
            <View style={styles.selection}>
              <Text style={styles.selectionTitle}>FAQs</Text>
            </View>
            <View style={styles.rowSpacer} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSupport}>
            <View style={styles.selection}>
              <Text style={styles.selectionTitle}>Support and Feedback</Text>
            </View>
            <View style={styles.rowSpacer} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D2959",
    padding: 16,
  },
  image: {
    height: undefined,
    width: undefined,
  },
  profileImage: {
    marginTop: 0,
    width: 160,
    height: 160,
    borderRadius: 9999,
    overflow: "hidden",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    color: "white",
  },
  selection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 75,
    backgroundColor: "#76567F",
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  selectionTitle: {
    fontSize: 17,
    fontWeight: "400",
    color: "#0c0c0c",
  },
  dropdown: {
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default Account;
