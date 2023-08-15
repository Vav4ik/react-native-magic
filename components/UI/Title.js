import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    //specific style for different platforms:
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    //You can have platform specific files Title.android.js or Title.ios.js - must be imported as Title (no extension)
    borderColor: "white",
    padding: 12,
    width: 300,
    maxWidth: "80%",
  },
});

export default Title;
