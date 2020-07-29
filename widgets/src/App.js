import React from 'react';
import Search from './components/Search';
import Accordion from './components/Accordion';

const items = [
    {
        title:'what is React',
        content:'React is a front end javascript framework'
    },
    {
        title:'Why use React',
        content:'React is a favorite JS lib amoung engineers'
    },
    {
        title:'More on React',
        content:'react is a front end javascript framework'	
    }
]

const App = ()=>{
    return (
        <div>
            <br/>
           <Search/>
        </div>
    );
}

export default App;