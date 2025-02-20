import {
    View, Text, StyleSheet
} from "react-native"

import { styles } from "./styles"
import { Double } from "react-native/Libraries/Types/CodegenTypes"

export function Balance(props: {balance: string; expenses: string}){
    return (
        <View style={styles.container}>
            
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{ props.balance }</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{ props.expenses }</Text>
                </View>
            </View>

        </View>
    )
}