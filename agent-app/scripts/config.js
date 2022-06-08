export default {
    clientID: 'bde46253-e5e1-43b4-bc8f-35711b3c41d1',

    testUri: 'http://localhost:8080',
    prodUri:  'https://pexip.github.io/pexip-genesys-agent-blueprint/agent-app/',

    genesysCloud: {
        // Genesys Cloud region
        // eg. 'mypurecloud.ie', 'euw2.pure.cloud', etc...
        region: 'usw2.pure.cloud'
    },

    pexip: {
        conferencePrefix: "mp",
        conferenceNode: "pex-gcc.com",
        conferencePin: "2021",
        videoElementId: "pexip-video-container"
    }
}
