import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14

    },
    actionButton: {
        alignItems: "center",
        marginRight: 32
    },
    areaButton: {
        backgroundColor: colors.gray[200],
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    labelButton: {
        marginTop: 4,
        textAlign: "center",
        fontFamily: fontFamily.medium
    }
})