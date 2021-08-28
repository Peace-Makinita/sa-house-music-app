import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Listening and enjoy local underground Deep / Soulful anytime, anywhere
      </Text>

      <Text style={styles.subHeading}>
        The artists we showcase are underground SA producers who dominate the culture.
      </Text>

      <View style={styles.containerWrapper}>
        {/* <View style={styles.buttonContainer}>
          <Button title="" />
        </View> */}
      </View>

      <Text>Don't have an acccount? Register here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c1091f'
  },
  title: {
    fontSize: 28,
    padding: 50,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  subHeading: {
    fontSize: 20,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 45,
    color: '#FFFFFF'
  },
  containerWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c1091f'
  },
  buttonContainer: {
    flex: 1,
  }
})
