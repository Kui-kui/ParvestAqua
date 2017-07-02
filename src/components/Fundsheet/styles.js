import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'BNPPSans',
    fontSize: 26,
  },
  title: {
    fontFamily: 'BNPPSans',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'BNPPSans',
    fontWeight: 'bold',
  },
  grid: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  block: {
    backgroundColor: '#7fb4ba',
    borderRadius: 1,
    height: 100,
    margin: 2,
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
  blockText: {
    fontFamily: 'BNPPSans',
    color: '#fff',
    textAlign: 'center',
  },
  blockTitle: {
    fontFamily: 'BNPPSans',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    textAlign: 'center',
  }
})

export default styles
