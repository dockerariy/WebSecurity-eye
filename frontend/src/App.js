import React, { useState } from 'react';

const App = () => {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState('');

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const checkVulnerability = () => {
        // Simulating an API call to check for vulnerability
        if (url) {
            setResults(`Results for ${url}: No vulnerabilities found!`);
        } else {
            setResults('Please enter a valid URL.');
        }
    };

    return (
        <div>
            <h1>Web Security Check</h1>
            <input type="text" value={url} onChange={handleUrlChange} placeholder="Enter URL here" />
            <button onClick={checkVulnerability}>Check</button>
            <div className="results">
                <h2>Results:</h2>
                <p>{results}</p>
            </div>
        </div>
    );
};

export default App;