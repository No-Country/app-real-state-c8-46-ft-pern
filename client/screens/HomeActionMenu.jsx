import { View } from "react-native";
import HVA from "../components/HomeActionMenu/HVA";
import SearchBar from "../components/HomeActionMenu/SearchBar";

const HomeActionMenu = () => {
  return (
    <View >
      <SearchBar  />
      <HVA />
    </View>
  );
};

export default HomeActionMenu;
