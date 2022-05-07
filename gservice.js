function getAccounts() {
    gapi.client.load('analytics', 'v3').then(function() {
        gapi.client.analytics.management.accounts.list().then(function (response) {
            if (response.result.items && response.result.items.length) {
                console.log(response.result.items);
                populateAccounts(response.result.items);
            } else {
                console.log('No accounts found for this user.');
            }
        });
    }); 
}

function getProperties(accountId) {
    gapi.client.analytics.management.webproperties.list(
        {'accountId': accountId})
      .then(function (response) {
        if (response.result.items && response.result.items.length) {
            populateProperties(response.result.items)    
            console.log(response.result.items)
        } else {
          console.log('No properties found for this user.');
        }
      })
      .then(null, function(err) {
        console.log(err);
    });
}

function getViews(accountId,propertyId)
{
    gapi.client.analytics.management.profiles.list({
    'accountId': accountId,
    'webPropertyId': propertyId})
    .then(function (response) {
        if (response.result.items && response.result.items.length) {
            console.log(response.result.items)
            populateViews(response.result.items)    
        } else {
          console.log('No views (profiles) found for this user.');
        }
    })
    .then(null, function(err) {
        console.log(err);
    });    
}

function getReport(profileId)
{
    gapi.client.analytics.data.ga.get({
        'ids': 'ga:' + profileId,
        'start-date': '2022-01-01',
        'end-date': 'today',
        'metrics': 'ga:pageviews,ga:uniquePageviews',
        'dimensions':'ga:pagePath'
      })
      .then(function(response) {
        var formattedJson = JSON.stringify(response.result, null, 2);
        populateTable(response.result);
      })
      .then(null, function(err) {
          console.log(err);
      });
}