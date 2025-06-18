import React, {useState, useEffect} from "react";
import {View, Text} from "react-native";
import peliculasData from "../assets/data/peliculas.json";


export default function ConsumoJSON() {
    const [tarjetas, setTarjetas] = useState([]);
    useEffect (() => {
        setTarjetas (peliculasData);
    }, []);

    return (
        <View>
            {tarjetas.map((tarjeta) => (
            <View key={tarjeta.id}>
                <Text>{tarjeta.name}</Text>
                <Text>{tarjeta.years}</Text>
            </View>
        ))}
        </View>
       
    )
}