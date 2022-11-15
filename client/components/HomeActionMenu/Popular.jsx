import { View } from "react-native";
import PopularCard from "./PopularCard";

const popArr = [
  {
    img: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5",
    type: "Apartment",
    price: "$1,800",
    name: "Owner Aparment",
    location: "Surabaya, Indonesia",
  },
  {
    img: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293139603/4df0391cec704f1ea702e42d21d64796",
    type: "Apartment",
    price: "$1,400",
    name: "Semie Aparment",
    location: "Surabaya, Indonesia",
  },
  {
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
      <View>
        {popArr.map((p) => (
          <PopularCard
            img={p.img}
            type={p.type}
            price={p.price}
            name={p.name}
            location={p.location}
          />
        ))}
      </View>
    </View>
  );
};

export default Popular;
