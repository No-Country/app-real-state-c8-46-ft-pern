import { View, Text, FlatList, StyleSheet } from "react-native";
import PopularCard from "./PopularCard";

const popArr = [
  {
    id: 1,
    img: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5",
    type: "Apartment",
    price: "$1,800",
    name: "Owent Apartment",
    location: "Surabaya, Indonesia",
  },
  {
    id: 2,
    img: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293139603/4df0391cec704f1ea702e42d21d64796",
    type: "Apartment",
    price: "$1,400",
    name: "Semie Aparment",
    location: "Surabaya, Indonesia",
  },
  {
    id: 3,
    img: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/244766781/cd5fae5b8e8e4daf83e80141390ff9ba",
    type: "House",
    price: "$2,200",
    name: "Inda Perum House",
    location: "Surabaya, Indonesia",
  },
];

const Popular = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom:15
        }}
      >
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Popular</Text>
        <Text style={{ color: "#2972FE", fontWeight: '600' }}>See all</Text>
      </View>
      <FlatList
      showsHorizontalScrollIndicator={false}
        data={popArr}
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
    marginTop: 20,
  },
});
export default Popular;
