import { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../../redux/actions/propertiesAction";
import PopularCard from "./PopularCard";
import {Skeleton} from "moti/skeleton";
import{MotiView} from "moti"
import {SkeletonCard} from '../HomeActionMenu/SkeletonCard'
import { popArr } from "./SkeletonCard";



const AllProperties = () => {
  const dispatch = useDispatch();
  const { isLoading, properties } = useSelector(
    (state) => state.properties
  );
  useEffect(() => {
    dispatch(getProperties());
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
   {properties.length?(
       <FlatList
       showsHorizontalScrollIndicator={false}
       data={properties}
       renderItem={({ item }) => (
         <PopularCard
           name={item.title}
           img={item.coverPhoto}
           type={item.type}
           price={item.price}
           location={item.location}
         />
       )}
       keyExtractor={(item) => item.id}
       horizontal={true}
     />
   ):(  <FlatList
    showsHorizontalScrollIndicator={false}
    data={popArr}
    renderItem={({ item }) => (
      <SkeletonCard/>
    )}
    keyExtractor={(item) => item.id}
    horizontal={true}
  />)}
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

