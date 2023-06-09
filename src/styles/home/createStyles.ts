import { StyleSheet } from "react-native"

export const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5FF",
    marginTop: 50,
    paddingHorizontal: 15,
    position: "relative",
  },
  homeHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20,
    color: "#2E3A59",
  },
  cardWrapper: {
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  boldText: {
    color: "#242736",
    fontSize: 18,
    fontWeight: "600",
  },
  lightText: {
    color: "#AEAEB3",
    fontSize: 14,
    fontWeight: "400",
  },
  priceText: {
    color: "#AEAEB3",
    fontSize: 14,
    fontWeight: "600",
  },
})
