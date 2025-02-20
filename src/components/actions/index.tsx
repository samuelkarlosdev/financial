import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles';

import { AntDesign } from "@expo/vector-icons"
import { fontFamily } from '@/styles/fontFamily';
import { colors } from '@/styles/colors';

export function Actions(){
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.actionButton} >
                <View style={styles.areaButton} >
                    <AntDesign name='addfolder' size={26} color={colors.black}>

                    </AntDesign>
                </View>
                <Text style={styles.labelButton}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} >
                <View style={styles.areaButton} >
                    <AntDesign name='tagso' size={26} color={colors.black}>

                    </AntDesign>
                </View>
                <Text style={styles.labelButton}>Compas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} >
                <View style={styles.areaButton} >
                    <AntDesign name='creditcard' size={26} color={colors.black}>

                    </AntDesign>
                </View>
                <Text style={styles.labelButton}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} >
                <View style={styles.areaButton} >
                    <AntDesign name='barcode' size={26} color={colors.black}>

                    </AntDesign>
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} >
                <View style={styles.areaButton} >
                    <AntDesign name='setting' size={26} color={colors.black}>

                    </AntDesign>
                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>

        </ScrollView>

    );
}