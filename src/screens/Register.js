import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { colors } from '../global/styles';


const ListItem = ({ text }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.bulletPoint}>{'\u2022'}</Text>
      <Text style={styles.listItem}>{text}</Text>
    </View>
  );
};


const RegisterScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>APPLYING FOR MEMBERSHIP</Text>
      <Text style={styles.paragraph}>Mainly the library is catered to the general public of the Colombo Municipal area. At the same time, there are provisions for individuals studying or working within the city limits.</Text>
      <Text style={styles.paragraph}>In addition, individuals can become members by depositing Rs. 2000/= as a security fee instead of providing a guarantor attestation.</Text>
      <Text style={styles.paragraph}>Even foreigners can use the library by paying Rs. 5000/= as the security fee.</Text>
      <Text style={styles.sectionTitle}>Membership Charges and Application Procedure:</Text>
      <ListItem text="Within city limits: Rs. 100.00 + NBT (Nation Building Tax)" />
      <ListItem text="Non-residents employed or studying in the city: Rs. 200.00 + NBT" />
      <ListItem text="Non-residents neither employed nor attending studies in the city: Rs. 500.00 + NBT" />
      <ListItem text="Without guarantor attestation: Rs. 2000.00 + NBT" />
      <ListItem text="For foreigners: Rs. 5000.00 + NBT" />
      <Text style={styles.paragraph} >Applicants should fill the application form obtained from the library or downloaded from the web page.</Text>
      <Text style={styles.paragraph}>There is a separate application for children's membership.</Text>
      <Text style={styles.paragraph}>A guarantor who lives within the city limits should attest to the application form. The attestation form will be sent to the guarantor by post from the library.</Text>
      <Text style={styles.paragraph}>After receiving the attestation, the applicant will be informed by sending a postcard.</Text>
      <Text style={styles.paragraph}>As soon as the applicant is informed, they will receive two library tickets to borrow books.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingTop:60,
    backgroundColor:colors.Purple,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:colors.Peach
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color:colors.Peach
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    color:colors.Pink,
    fontWeight:'bold',
    marginLeft:12
  },
  bulletPoint: {
    marginRight: 5,
    color:colors.Pink,
  },
  paragraph:{
    marginBottom:10,
    marginTop:5,
    color:colors.Pink
  }
});

export default RegisterScreen;
