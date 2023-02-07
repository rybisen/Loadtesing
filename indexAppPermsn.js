

const loadtest = require('loadtest');

const options = {
    url: 'http://admingql.semanoor.com/', //?introspection-token=25202caf90464c9580770d3f0e25d8ca
    concurrency: 20,
    method: 'POST',
    //body: JSON.stringify({ "variables": { "answerSheetId": "02fbf2f0-477b-4308-89c7-c2ce8f529f11", "questionIds": ["2ab460bf-f60a-45ec-bac2-d33ae8ede908"] }, "query": "query ($answerSheetId:String!, $questionIds: [String!]!){ answerSheetChanges(where:{answerSheetId:$answerSheetId, questionIds:$questionIds}) { id status currentQuestion assessmentId answers{ id result qType score spendTime questionId } score totalSpendTime objScore subjScore } }" }),
    body: JSON.stringify({ "variables": {}, "query" : `
    mutation {
        userInfo(id: "cka6tdoh902x20886dnb64r4q") {
          id
          email
          name
          orgName
          orgLogo
          jitsiDomainUrl
          chatDomainUrl
        }
      }` }),
    requestsPerSecond: 100,
    maxSeconds: 100,
    requestGenerator: (params, options, client, callback) => {
        options.headers['Authorization'] = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTYyNjc2MDU2OSwiZXhwIjoxNjI2NzY0MTY5LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1oY3R0bUBzZW1hbm9vcnBsdXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1oY3R0bUBzZW1hbm9vcnBsdXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ1aWQiOiJja2E2dGRvaDkwMngyMDg4NmRuYjY0cjRxIiwiY2xhaW1zIjp7InVzZXJJZCI6ImNrYTZ0ZG9oOTAyeDIwODg2ZG5iNjRyNHEiLCJvcmdhbml6YXRpb25JZCI6ImNqa2R4YzZkMDAwMXQwYjE3dXp0NWlqN3kiLCJuYW1lIjoiU2FrZXRoYSBLZXRoaXJlZGR5Iiwicm9sZSI6WyJURUFDSEVSIl0sImVtYWlsIjoidGVzdDEwMEBzYm9vb2suY29tIn19.S9cias6_2cw6hZHChL6dtQgbeWj2PuhHW3W9gp9tibBFWRk6vrinTOkrCzNY5cpwAgu5b5GyajXdlsRzsllwC5JMB0_MiRMIL2zBtUFat5qsSi8DV74LL6kmDzoatBCtLeTvpt_EoI7Jxn-Fh2AJynYS5cyboc9G4zkPnsYyCZwih_ZpFQqB02nC4esaWeSwbXAnkHNPVc-tFchDn-fY3DeRl-t5_9SUJdG43o6iA11PHYRrqVef0FsVsPQZGTxeFEnvA0jPP4_I_nhY1i2HJ1Mb99XJp4OKwnoF1OqbtKVQv89aOGsKDbMSBQDLUtHHW5LNltX3Ouc66wZPXg1j6w';
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify({ "variables": {}, "query" : `
        mutation {
            userInfo(id: "cka6tdoh902x20886dnb64r4q") {
              id
              email
              name
              orgName
              orgLogo
              jitsiDomainUrl
              chatDomainUrl
            }
          }` });
        const request = client(options, callback);
        return request;
    }
};

loadtest.loadTest(options, (error, results) => {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log(results);
    console.log('Tests run successfully');
});