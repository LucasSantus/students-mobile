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
    });

	//add
    const [post, setPost] = useState<PostType>();

    useEffect(() => {
        instance
          .get("students/1/")
          .then((response) => alert(response.data))
          .catch((err) => {
            alert("ops! ocorreu um erro" + err);
          });
      }, []);

    return (
        <View>
                <Text>
                    {post?.phone}
                </Text>
            
        </View>
    );

    // return (
    //     <View>
    //         {posts.length > 0 ? (
    //             posts.map((post) => (
    //                 <Text>
    //                     {post.email}
    //                 </Text>
    //             ))
    //         ) : (
    //             <Text>Open up StudentGETAll.tsx to start working on your StudentGETAll!</Text>
    //         )}
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
