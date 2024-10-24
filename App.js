import React, { useState } from 'react';
import './App.css';

const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
    { id: 6, name: 'Fig' },
    { id: 7, name: 'Grape' },
];

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter data based on the search term
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <h1>Search Filter Example</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredData.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
