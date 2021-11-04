import React from 'react';
import './App.css';
import Block from "./components/Block";
import axios from "axios";

function App() {

    const [items, setItems] = React.useState([]) // Товары - берем с сервера mockapi

    React.useEffect(() => {
        async function fetchData() {

            const itemsResponse = await axios.get('https://614a2f5207549f001755a841.mockapi.io/blocks')

            setItems(itemsResponse.data)
            console.log(itemsResponse.data)
        }

        fetchData()

    }, []) // Запросы на сервак = Получаем данные с сервера.

    return (
        <>
            {items.map(element => <Block title={element.title}/>)}
        </>
    );
}

export default App;
