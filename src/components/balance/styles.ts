import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    item: {

    },
    itemTitle:{
        fontSize: 20,
        color: colors.gray[300]
    },
    content:{
        flexDirection: "row",
        alignItems: "center"
    },
    currencySymbol: {
        color: colors.gray[300],
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: colors.green
    },
    expenses: {
        fontSize: 22,
        color: colors.red
    },
})