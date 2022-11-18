import React    from "react";
import { View, StyleSheet } from "react-native";


export const data = [
    {
        id: 1 ,
        title: "The Biggest Real State App of the century" ,
        uri: "https://images.unsplash.com/photo-1626114000241-b419d40a75b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=330&q=80" ,
        description: "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,
    } ,
    {
        id: 2 ,
        title: "We Focus on Providing a Comfortable Place For You" ,
        uri: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" ,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore." ,
    } ,
    {
        id: 3 ,
        title: "Find Your Beloved Family's Dream House with us" ,
        uri: "https://images.unsplash.com/photo-1580785693039-7efb961f4b3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" ,
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione." ,
    } ,
]

export const CarouselPagination = ({countID}) => {

    return (
        <View style={styles.pagination}>
            {data.map((item) => {
                const {id} = item
                return (
                    <View key={id} style={id === countID ? styles.selected : styles.unselected}/>
                )

            })}
        </View>
    );
};

const styles = StyleSheet.create({
    pagination: {
        flexDirection: "row" ,
        alignSelf: "center" ,
        width: "100%" ,
        justifyContent: "center" ,
        paddingTop: 30 ,
    } ,
    unselected: {
        width: 8 ,
        height: 8 ,
        borderRadius: 5 ,
        backgroundColor: "gray" ,
        marginHorizontal: 8 ,
        alignSelf: "center" ,
    },
    selected: {
        width: 10 ,
        height: 10 ,
        borderRadius: 5 ,
        backgroundColor: "blue" ,
        marginHorizontal: 8 ,
        alignSelf: "center" ,
    }
})
