import Card from "./Card";
import { View } from "react-native";
const HVA = () => {
    return (
        <View style={{display:"flex",justifyContent: "center", alignItems:"center", backgroundColor: "white"}}>
            <View style={{display:"flex", flexDirection:"row"}}>

          <Card text="House" font="MaterialIcons" name="house"/>
          <Card text="Villa" font="Fontisto" name="holiday-village"/>
          <Card text="Apartment" font="MaterialIcons" name="apartment"/> 
            </View>
        </View>
    )
};

export default HVA;
