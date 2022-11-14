import { View } from "react-native";
import Card from "./Card";
import Search from "./Search";

const house = {
  uri: "https://cdn.icon-icons.com/icons2/2225/PNG/512/home_icon_134474.png",
};

const SearchBar = () => {
  return (
    <View>
      <Search />
      <Card imagen={house} link={""} />
      <Card imagen={house} link={""} />
      <Card imagen={house} link={""} />
    </View>
  );
};

export default SearchBar;
