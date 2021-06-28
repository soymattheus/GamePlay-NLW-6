import React from "react";
import { View , Text} from "react-native";

import { Avatar } from "../Avatar";
import { useAuth } from "../../hooks/auth";
import { styles } from "./style";

export function Profile() {
    const { user } = useAuth();
    return(
        <View style={styles.container}>

            <Avatar urlImage={user.avatar} />
            {console.log(user.avatar)}

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá, 
                    </Text>

                    <Text style={styles.username}>
                        {user.firstname}
                    </Text>
                </View>

                <Text style={styles.mensage}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}