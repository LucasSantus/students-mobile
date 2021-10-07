import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function StudentGETAll() {
    interface PostType {
        pk: number;
        name: string;
        email: string;
        document: string;
        phone: string;
        registrationDate: string;
    }
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [document, setDocument] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
            "Content-type": "application/json"
        }
    });

	//add
    const [post, setPost] = useState<PostType>();

    function register(data: { name: any; email: any; document: any; phone: any; }){
        instance.post("students/",{
            name: data.name,
            email: data.email,
            document: data.document,
            phone: data.phone,
        });
    }


    return (
        <>
            <TextInput
                label="Name:"
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="Email:"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Document:"
                value={document}
                onChangeText={text => setDocument(text)}
            />
            <TextInput
                label="Phone:"
                value={phone}
                onChangeText={text => setPhone(text)}
            />

            <Button icon="camera" mode="contained" onPress={() => {
                const data = {
                    name: name,
                    email: email,
                    document: document,
                    phone: phone,
                }
                register(data);
            }}>
                Registrar
            </Button>
        </>
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
