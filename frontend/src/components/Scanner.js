import React, { useState } from 'react';
import './Scanner.css';

const Scanner = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleScan = () => {
        setLoading(true);
        // Simulate scan delay
        setTimeout(() => {
            // Here you would typically call the scan API
            setLoading(false);
        }, 3000);
    };

    return (
        <div className='scanner'>
            <h1>Web Security Scanner</h1>
            <div className='input-group'>
                <input 
                    type='url' 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    placeholder='Enter URL to scan...'
                    required
                />
                <button onClick={handleScan} disabled={loading}>
                    {loading ? <span className='spinner'></span> : 'Scan'}
                </button>
            </div>
            <pre className='terminal'>
                {loading ? 'Scanning...
Please wait...' : 'Results will appear here...'}
            </pre>
        </div>
    );
};

export default Scanner;
