import {View, Text} from 'react-native';
import {Link} from "expo-router"

const SignIn = () => {
    return (
        <View>
            <Text>Create Account</Text>
            <Link href="/(auth)/sign-up">Sign Up</Link>
        </View>
    )
}

export default SignIn