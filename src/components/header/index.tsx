import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import { styles } from './styles'
import { Feather } from "@expo/vector-icons"
import { colors } from '@/styles/colors'

export function Header(props: { name: string }){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{ props.name }</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonuser}>
                    <Feather name='user' size={25} color={colors.white}/>
                </TouchableOpacity>

            </View>
        </View>
    )
}