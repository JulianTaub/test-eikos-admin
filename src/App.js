import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} edit={EditGuesser}/>
        <Resource name="posts" list={ListGuesser} edit={EditGuesser}/>
        <Resource name="comments" list={ListGuesser} edit={EditGuesser}/>
    </Admin>
);

export default App;
