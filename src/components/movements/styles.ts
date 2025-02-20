import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.gray[300]
    }, 
    date: {
        color: colors.gray[300],
        fontFamily: fontFamily.bold
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 8
    },
    label: {
        fontFamily: fontFamily.bold,
        fontSize: 16
    },
    value: {
        fontSize: 16,
        color: colors.green,
        fontFamily: fontFamily.bold
    },
    expenses: {
        fontSize: 16,
        color: colors.red,
        fontFamily: fontFamily.bold
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: colors.gray[300],
        borderRadius: 8,
    }
})