import { View } from "react-native";
import HVA from "../components/HomeActionMenu/HVA";
import SearchBar from "../components/HomeActionMenu/SearchBar";
import Popular from "../components/HomeActionMenu/Popular";
import NearbyYourLocation from "../components/HomeActionMenu/NearbyYourLocation";
const HomeActionMenu = () => {
  return (
    <View style={{ paddingTop: 10, backgroundColor: "white" }}>
      <SearchBar />
      <HVA />
      <Popular />
      <NearbyYourLocation />
    </View>
  );
};

export default HomeActionMenu;
