import { View, Text, FlatList, StyleSheet } from "react-native";
import PopularCard from "./PopularCard";
import { popArr } from "./SkeletonCard";
import { SkeletonCard } from "./SkeletonCard";


const NearbyYourLocation = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Nearby your location
        </Text>
        <Text style={{ color: "#2972FE", fontWeight: "600" }}>See all</Text>
      </View>
      {
        false?(
          <FlatList
        showsHorizontalScrollIndicator={false}
        data={popularProperties}
        renderItem={({ item }) => (
          <PopularCard
            name={item.title}
            img={item.coverPhoto}
            type={item.purpose}
            price={`$ ${item.price}`}
            location={item.location}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
        ):
        (  <FlatList
          showsHorizontalScrollIndicator={false}
          data={popArr}
          renderItem={({ item }) => (
            <SkeletonCard/>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 20,
  },
});
export default NearbyYourLocation;
