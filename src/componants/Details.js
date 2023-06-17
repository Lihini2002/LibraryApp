import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import firebase from "firebase/app";
import "firebase/database"; // or 'firebase/firestore' for Firestore
import getMembers from "../consts/member";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { db } from "../config";

const Details = ({ userEmail }) => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [editMode, setEditMode] = useState(false);
  const memberId = "0";

  useEffect(() => {
    Promise.all([getMemberData(userEmail)]);
  }, [userEmail]);

  const getMemberData = () => {
    return (
      new Promise((resolve, reject) => {
        getMembers().then((members) => {
          console.log("Other email:" + userEmail);

          getMembers()
            .then((members) => {
              if (members.length > 0) {
                let member = members[0];
                for (let i = 0; i < members.length; i++) {
                  const currentOne = members[i];
                  console.log("Current one in the array " + currentOne.email);
                  if (currentOne.email === userEmail) {
                    member = currentOne;
                    console.log("Member with the correct email" + member);
                    break;
                  }
                }
                setName(member.firstname + "" + member.lastname);
                setEmail(member.email);
                setMobile(member.phonenumber);
                // const member = members[1];
              }
            })
            .catch((error) => {
              console.log("Error retrieving member data", error);
            });
        });
      }),
      []
    );
  };

  const nameChange = (text) => {
    setName(text);
  };
  const emailChange = (text) => {
    setEmail(text);
  };
  const mobileChange = (number) => {
    setMobile(number);
  };
  const toggleEdit = () => {
    setEditMode(!editMode);
  };
  const saveChanges = () => {
    setEditMode(false);
    // Updating database with edited information
    const memberRef = db.ref(`members/${memberId}`);
    memberRef
      .update({
        firstname: username.split("")[0],
        lastname: username.split("")[1],
        email,
        phoneNo: mobile,
      })
      .then(() => {
        console.log("Data updated successfully");
      })
      .catch((error) => {
        console.log("Error updating data:", error);
      });
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.label}>Date joined:</Text>
        <Text style={styles.value}>October 2022</Text>

        <Text style={styles.label}>Valid until:</Text>
        <Text style={styles.value}>October 2027</Text>

        <Text style={styles.label}>Name:</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={nameChange}
            placeholder="Enter your name"
          />
        ) : (
          <Text style={styles.value}>{username}</Text>
        )}

        <Text style={styles.label}>E-mail:</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={emailChange}
            placeholder="Enter your email"
          />
        ) : (
          <Text style={styles.value}>{email}</Text>
        )}

        <Text style={styles.label}>Mobile Number:</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={mobileChange}
            placeholder="Enter your number"
          />
        ) : (
          <Text style={styles.value}>{mobile}</Text>
        )}
        {!editMode && (
          <TouchableOpacity onPress={toggleEdit} style={styles.edit}>
            <Feather name="edit" size={24} color="#41444B" />
          </TouchableOpacity>
        )}
        {editMode && (
          <TouchableOpacity onPress={saveChanges} style={styles.save}>
            <Feather name="check" size={24} color="#41444B" />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#FFFFF",
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
  },
  background: {
    flex: 1,
    backgroundColor: "#76567F",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  value: {
    fontSize: 14,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  edit: {
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  save: {
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 16,
  },
});

export default Details;
