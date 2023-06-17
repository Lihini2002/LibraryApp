import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const Support = () => {
  const [SupportItems, SetSupportItems] = useState([
    {
      question: "Kirulapone branch library",
      answer: "Address: High level road, Kirulapone, Colombo 06",
      answerVisible: false,
    },
    {
      question: "Mihindu Mawatha branch library ",
      answer: "Address: Mihindu Mawatha, Colombo 12",
      answerVisible: false,
    },
    {
      question: "Elliot Place branch library",
      answer: "Address: Elliot Place, Colombo 12",
      answerVisible: false,
    },
    {
      question: "Kettarama branch library",
      answer: "Address: Kettarama Mawatha, Colombo 14",
      answerVisible: false,
    },
    {
      question: "Mattakuliya branch library",
      answer: "Address: Central Road, Colombo 15",
      answerVisible: false,
    },
    {
      question: "Gunasinghe park reading room",
      answer: "Address: Gunasinghe park, Colombo 11",
      answerVisible: false,
    },
    {
      question: "Kotahena branch library",
      answer: "Address: George R. De Silva Mawatha, Colombo",
      answerVisible: false,
    },
    {
      question: "Sri Sucharitha branch library",
      answer: "Address: Sucharitha Mawatha, Colombo 12",
      answerVisible: false,
    },
    {
      question: "Belmont Street branch library",
      answer: "Address: 110 Belmont St, Colombo",
      answerVisible: false,
    },
    {
      question: "Henry Pediris Childrens library",
      answer: "Address: Pediris Park, Colombo 05",
      answerVisible: false,
    },
  ]);
  const Toggle = (index) => {
    SetSupportItems((PrevItems) => {
      const updatedItems = [...PrevItems];
      updatedItems[index].answerVisible = !updatedItems[index].answerVisible;
      return updatedItems;
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {SupportItems.map((item, index) => (
        <TouchableHighlight
          key={index}
          onPress={() => Toggle(index)}
          underlayColor="#DDDDDD"
          style={styles.questionContainer}
        >
          <View>
            <Text style={styles.questionText}>{item.question}</Text>
            {item.answerVisible && (
              <Text style={styles.answerText}>{item.answer}</Text>
            )}
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#76567F",
  },
  questionContainer: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  answerText: {
    fontSize: 15,
  },
});

export default Support;
