var tokenClient;
var access_token;

function gapiLoad() {
    gapi.load('client', gapiStart)
}

function gapiStart() {
    gapi.client.init({});
}

function gisInit() {
    tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: 'CLIENT_ID',
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    callback: (tokenResponse) => {
        access_token = tokenResponse.access_token;
    },
    });
}

function getToken() {
    tokenClient.requestAccessToken();
}

function revokeToken() {
    google.accounts.oauth2.revoke(access_token, () => {console.log('access token revoked')});
}
