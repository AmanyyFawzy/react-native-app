import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    columnGap: 15,
    paddingTop: 30,
    backgroundColor: "#f5f6fa",
    flexGrow: 1,
  },
  drawerHeader: {
    height: 150,
    backgroundColor: '#1B3C53',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  drawerItems: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    marginBottom: 40,
  },
});

export default styles;
