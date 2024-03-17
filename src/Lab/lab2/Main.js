import { View } from "react-native";

export type UserType = {
    name: String;
    avatar: String;
}

export default function Main() {
    return(
        <View style={styles.container}>
            <Header/>
            <Body/>
            <Footer/>
        </View>
    )
}