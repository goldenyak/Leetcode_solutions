import React from 'react';
import './App.css';
import Block from "./components/Block";
import axios from "axios";

function App() {

    // const [title, setTitle] = React.useState('')

    React.useEffect(() => {
        axios.get('https://614a2f5207549f001755a841.mockapi.io/blocks').then(({data}) => {
            console.log(data)
        })
    }, [])


    return (
        <>
            <Block title="Вставляем элемент внутрь/середину массива"/>
            <Block title="Группируем массив"/>
            <Block title="Удаляем из массива"/>
            <Block title="Меняем элементы массива местами"/>
            <Block title="Добавляем в массив новый элемент"/>
        </>

    );
}

export default App;
