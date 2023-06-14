import * as React from 'react';
import { useState } from 'react';
import { View , StyleSheet} from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import { colors } from '../global/styles';


export const RenewBtn = () => 
{
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <View>
      <Button
          style={styles.button}
          mode="contained"
          buttonColor={colors.Violet}
          textColor={colors.White}
          labelStyle={styles.buttonText}
          onPress={showDialog}
        >
          Renew
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is a simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  
    buttonText: {
      fontSize: 15,
      letterSpacing: 1,
      fontWeight: '900',
    }

     ,
    button: {
        fontSize: 13,
        width: 100,
        textAlign:"right",
        cursor: "pointer"
      },
     
  
    
  }); 



