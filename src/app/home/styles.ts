import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

import { fontFamily } from "@/styles/fontFamily";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.gray[100]
    },
    title: {
      fontSize: 18,
      margin: 14,
      fontFamily: fontFamily.bold,
    },
    list: {
      marginStart: 14,
      marginEnd: 14
    }
  });