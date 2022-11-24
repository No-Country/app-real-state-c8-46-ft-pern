import { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPopularProperties } from "../../redux/actions/popularAction";
import { getProperties } from "../../redux/actions/propertiesAction";
import PopularCard from "./PopularCard";

export const popArr = [
  {
    id: 1,
    img: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5",
    type: "Apartment",
    price: "$1,800",
    name: "Owent Apartment",
    location: "Surabaya, Indonesia",
    latitude: 37.73825,longitude: -122.4324
  },
  {
    id: 2,
    img: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293139603/4df0391cec704f1ea702e42d21d64796",
    type: "Apartment",
    price: "$1,400",
    name: "Semie Aparment",
    location: "Surabaya, Indonesia",
    latitude: 37.76825,longitude: -122.4324
  },
  {
    id: 3,
    img: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/244766781/cd5fae5b8e8e4daf83e80141390ff9ba",
    type: "House",
    price: "$2,200",
    name: "Inda Perum House",
    location: "Surabaya, Indonesia",
    latitude: 37.77825,longitude: -122.4524
  },
];

const AllProperties = () => {
  const dispatch = useDispatch();
  const { isLoading, popularProperties } = useSelector(
    (state) => state.popular
  );
  useEffect(() => {
    dispatch(getPopularProperties);
    dispatch(getProperties);
  }, []);

  
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>All</Text>
        <Text style={{ color: "#2972FE", fontWeight: "600" }}>See all</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={popularProperties.length ? popularProperties : popArr}
        renderItem={({ item }) => (
          <PopularCard
            name={item.name}
            img={item.img}
            type={item.type}
            price={item.price}
            location={item.location}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
  },
});
export default AllProperties;

