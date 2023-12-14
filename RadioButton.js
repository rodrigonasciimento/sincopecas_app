export default function RadioButton() {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={[styles.radioButtonIcon]}>
        <View style={[styles.radioButtonIconInnerIcon]} />
      </View>
      <View style={[styles.radioButtonTextContainer]}>
        <Text style={styles.radioButtonText}>Option A</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0.5,
    borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonIcon: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "red",
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIconInnerIcon: {
    height: 25,
    width: 25,
    backgroundColor: "red",
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  radioButtonTextContainer: {
    flex: 5,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
  radioButtonText: {
    fontSize: 18,
  },
});
