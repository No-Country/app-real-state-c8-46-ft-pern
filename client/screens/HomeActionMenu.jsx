import { View } from "react-native";
import HVA from "../components/HomeActionMenu/HVA";
import SearchBar from "../components/HomeActionMenu/SearchBar";
import Popular from "../components/HomeActionMenu/Popular";
const HomeActionMenu = () => {
  return (
    <View >
      <SearchBar  />
      <HVA />
      <Popular />
    </View>
  );
};

export default HomeActionMenu;
