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
  keyNumbersGrid: {
    padding: 10
  },
  keyNumbersBlock: {
    backgroundColor: '#7fb4ba',
    borderRadius: 1,
    height: 100,
    margin: 2,
    padding: 5,
  },
  keyNumbersText: {
    fontFamily: 'BNPPSans',
    color: '#fff',
    textAlign: 'center',
  },
  keyNumbersTitle: {
    fontFamily: 'BNPPSans',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default styles
