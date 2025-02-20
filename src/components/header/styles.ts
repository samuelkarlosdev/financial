import { StyleSheet, StatusBar } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/fontFamily'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.purple,
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fontFamily.bold
    },
    buttonuser: {
        width: 44,
        height: 44,
        backgroundColor: colors.whitetransparent,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    }
})