// Configuration file for Web Security Eye

const config = {
    port: 3000,
    apiEndpoints: {
        getStatus: '/api/status',
        getUser: '/api/user',
        updateUser: '/api/user/update',
    }
};

module.exports = config;
