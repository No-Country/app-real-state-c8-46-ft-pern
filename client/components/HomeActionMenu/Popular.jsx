import { View, Text, FlatList } from "react-native";
import PopularCard from "./PopularCard";

const popArr = [
  {
    id: 1,
    img: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5",
    type: "Apartment",
    price: "$1,800",
    name: "Owner Aparment",
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
    <View>
      <View>
        <Text>Popular</Text>
        <Text>See all</Text>
      </View>
      <FlatList
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

export default Popular;
