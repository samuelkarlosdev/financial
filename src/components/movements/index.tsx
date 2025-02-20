import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react';

import { styles } from './styles'

export function Movements({ data }){

    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue) }>
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>

                { showValue ? (
                    <Text 
                    style={data.type === 1 ? styles.value : styles.expenses}
                    > 
                        {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                </Text>
                ) : (
                    <View style={styles.skeleton}>

                    </View>
                )}

            </View>

        </TouchableOpacity>
        
    )
}