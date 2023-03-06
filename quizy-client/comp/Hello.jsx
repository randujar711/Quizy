import { StyleSheet, View, Text } from "react-native"
import { Link } from 'react-router-native'
export default function Hello(){
    return(
        <View style={styles.container}>
            <Text>Hello this is the Hello page</Text>
            <Link to='/'>
                <Text>Lets go back home</Text>
            </Link>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});