import { StyleSheet, Text, View } from "react-native";
import HelpBigButton from "../../components/Profile/HelpBigButton";
import MenuTitle from "../../components/Profile/MenuTitle";
import MenuItem from "../../components/Profile/MenuItem";
const Help = () => {
  return (
    <View style={styles.container}>
      <MenuTitle title="Help" style={styles.title} />
      <View style={styles.buttonRow}>
        <HelpBigButton
          style={styles.button}
          icon="social-instagram"
          color="#FF6666"
          title="Instagram"
        />
        <HelpBigButton
          style={styles.button}
          icon="social-twitter"
          color="#2972FE"
          title="Twitter"
        />
      </View>
      <View style={styles.buttonRow}>
        <HelpBigButton
          style={styles.button}
          icon="web"
          color="#FFC52C"
          title="Website"
        />
        <HelpBigButton
          style={styles.button}
          icon="social-youtube"
          color="#FF6666"
          title="Youtube"
        />
      </View>
   <MenuItem text="FAQ" navigate="Profile"/>
   <MenuItem text="Contact us" navigate="Profile"/>
   <MenuItem text="Terms & Conditions" navigate="Profile"/>   
   <MenuItem text="Privacy Policy" navigate="Profile"/>
   <MenuItem text="About Us" navigate="Profile"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {},
 
});
export default Help;
