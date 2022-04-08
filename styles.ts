import Constants from "expo-constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "serif",
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  listArea: {
    backgroundColor: "#121212",
    flex: 1,
    paddingTop: 24,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "serif",
    backgroundColor: "#000",
    borderRadius: 10,
    color: "#fff",
    paddingLeft: 8,
  },
});

export default styles;
