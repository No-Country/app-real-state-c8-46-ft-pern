import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import {Skeleton} from "moti/skeleton";
import{MotiView} from "moti"
export const popArr = [ {id: 1,}, {id: 2,  },{id: 3,},];
export const SkeletonCard =()=>{
    return(
        <View style={styles.container}>
      <TouchableOpacity >
        <View>
          <Skeleton  width={220} height={190} colorMode={'light'}/>
        </View>
        <View style={styles.bottom}>
          <View style={styles.typePrice}>
            <Text ><Skeleton width={200} colorMode={'light'}/></Text>
            </View>
          <View style={styles.nameLocation}>
            <Text style={{ fontSize: 18, fontWeight: "600", padding: 10 }}>
            <Skeleton width={150} height={20} colorMode={'light'}/>
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 10, paddingLeft: 10 }}>
              <Skeleton width={120} height={20} colorMode={'light'}/>
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingLeft: 10,
    margin: 10,
  },
  bottom: {
    height: 110,
    width: 220,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#C6C8CD",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  typePrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  nameLocation: {
    display: "flex",
  },
  type: {
    fontSize: 10,
    color: "#2972FE",
    // fontWeight: 500,
    borderWidth: 1.5,
    borderColor: "red",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  price: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});