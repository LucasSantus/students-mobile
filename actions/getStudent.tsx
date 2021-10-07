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
            .get("students/1/")
            .then((response) => setPost({
                pk: response.data.id,
                name: response.data.nome,
                email: response.data.email,
                document: response.data.document,
                phone: response.data.phone,
                registrationDate: response.data.registrationDate,
            }))
            .catch((err) => {
                alert("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <View>
                <Text>
                    {post?.email}
                </Text>
            
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
