import React from 'react';
import './Header.css'; // Custom CSS for styling

const Header = () => {
    return (
        <header className="header">
            <h1 className="terminal-title">Welcome to WebSecurity-Eye</h1>
            <div className="system-info">
                <div className="system-status">Current User: dockerariy</div>
                <div className="timestamp">Current Date and Time (UTC): 2026-03-17 12:51:01</div>
            </div>
            <div className="network-indicators">
                <div className="network-status">Network: Active</div>
                <div className="activity-indicator">Traffic: Monitoring...</div>
            </div>
        </header>
    );
};

export default Header;