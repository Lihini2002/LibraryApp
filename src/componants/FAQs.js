import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const FAQs = () => {
  const [FAQItems, SetFAQItems] = useState([
    {
      question: "What are the supported libraries?",
      answer:
        "Kirulapone branch library, Mihindu Mawatha branch library, Elliot Place branch library, Kettarama branch library, Mattakkuliya branch library, Gunasinghe Park Reading Room, Kotahena branch library, Sri Sucharitha branch library, Peterson Lane branch library, Belmont Street branch library and Henry Pediris Childrens library.",
      answerVisible: false,
    },
    {
      question: "How do I search up the book I want?",
      answer: "Books can be searched up by title, author or ISBN.",
      answerVisible: false,
    },
    {
      question:
        "What do I do if the book I am searching for is currently unavailable?",
      answer:
        "Alexandria has the option to add books to your waitlist. Users will be notified when the book becomes available and it will be given out on a first come first serve basis.",
      answerVisible: false,
    },
    {
      question: "How do I renew books?",
      answer:
        "The option to renew books is available in the My Collections Page.",
      answerVisible: false,
    },
    {
      question: "What if I forget to return my book on time?",
      answer:
        "Reminders to return the book will be sent beforehand via email and the notification panel. If the book is not returned on time, you will be notified of your relevant fine amount.",
      answerVisible: false,
    },
    {
      question: "How can I sign out of my account?",
      answer:
        "If you want to sign out of Alexandria, you can reset the app. You may want to do this if you are using a shared device.",
      answerVisible: false,
    },
  ]);
  const Toggle = (index) => {
    SetFAQItems((PrevItems) => {
      const updatedItems = [...PrevItems];
      updatedItems[index].answerVisible = !updatedItems[index].answerVisible;
      return updatedItems;
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {FAQItems.map((item, index) => (
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
    padding: 16,
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

export default FAQs;
