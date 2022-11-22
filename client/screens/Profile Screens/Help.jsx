import { StyleSheet, View } from "react-native";
import HelpBigButton from "../../components/Profile/HelpBigButton";
import MenuTitle from "../../components/Profile/MenuTitle";

const Help = () => {
  return (
    <View>
      <MenuTitle title="Help" />
      <View style={styles.buttonRow}>
        <HelpBigButton icon="social-instagram" color="red" title="Instagram" />
        <HelpBigButton icon="social-twitter" color="red" title="Twitter" />
      </View>
      <View style={styles.buttonRow}>
        <HelpBigButton icon="web" color="red" title="Website" />
        <HelpBigButton icon="social-youtube" color="red" title="Youtube" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonRow: { display: "flex", flexDirection: "row" },
});
export default Help;
