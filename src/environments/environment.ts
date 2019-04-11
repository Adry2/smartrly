 import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
    production: false,

    region: 'us-east-1',

    identityPoolId: 'us-east-1:cc5241e7-6130-4040-84df-a72d6d87f953',
    userPoolId: 'us-east-1_XWahQoFC7',
    clientId: '49n9bsivm1h6m24omahqbi3rsd',

    rekognitionBucket: 'rekognition-pics',
    albumName: "usercontent",
    bucketRegion: 'us-east-1',

    ddbTableName: 'LoginTrail',

    cognito_idp_endpoint: '',
    cognito_identity_endpoint: '',
    sts_endpoint: '',
    dynamodb_endpoint: '',
    s3_endpoint: ''

};
