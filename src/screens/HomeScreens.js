import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StatusButton from '../components/StatusButton';
import {businessColor, personalColor, textColor} from '../constants/Colors';

const HomeScreens = ({navigation}) => {
  const personalHandler = () => {
    navigation.navigate('Personal');
  };
  const businessHandler = () => {
    navigation.navigate('Business');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To do list</Text>

      <View style={styles.statusContainer}>
        <StatusButton
          onPress={personalHandler}
          styleStatusBtn={styles.personalBtn}>
          Personal
        </StatusButton>
        <StatusButton
          onPress={businessHandler}
          styleStatusBtn={styles.businessBtn}>
          Business
        </StatusButton>
      </View>
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    color: textColor,
    marginBottom: 24,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  personalBtn: {
    backgroundColor: personalColor,
  },
  businessBtn: {
    backgroundColor: businessColor,
  },
});
