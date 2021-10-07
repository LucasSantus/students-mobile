import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios, { AxiosResponse } from 'axios';

export default function StudentGETAll() {
    interface PostType {
        pk: number;
        name: string;
        email: string;
        document: string;
        phone: string;
        registrationDate: string;
    }

    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
            "Content-type": "application/json"
        }
    });

	//add
    const [post, setPost] = useState<PostType>();

    useEffect(() => {
        instance
            .put("students/1/",{
                pk: 1,
                name: "LucasSantusSSSS",
                email: "leos98fsdfdsfs77@gmail.com",
                document: "tesdsgfdgadte",
                phone: "fdsgssfdfdsgd",
                registrationDate: "2021-10-07",
            });
    }, []);

    return (
        <View>
            testeeeee
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
