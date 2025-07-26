import React from 'react';
import { View } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import styles from '../Styles/AppStyles';

export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>
    </View>
  );
}
