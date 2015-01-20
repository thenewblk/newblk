// config/auth.js

if (process.env.NODE_ENV == 'staging') {
	module.exports = {

		'facebookAuth' : {
			'clientID' 		: '832186156805952', // your App ID
			'clientSecret' 	: 'aa5e1522da446027df26940113f14c0a', // your App Secret
			'callbackURL' 	: 'http://fxf.herokuapp.com/auth/facebook/callback'
		},

		'twitterAuth' : {
			'consumerKey' 		: 'TFr3hIBLlzTjS5vUhZiQMRpPJ',
			'consumerSecret' 	: 'yBF5LcJY5dIvqhxX3kWNrG0Bg5pEeU8y3lZDMn1yi42XXLLNCV',
			'callbackURL' 		: 'http://fxf.herokuapp.com/auth/twitter/callback'
		},

		'googleAuth' : {
			'clientID' 		: 'your-secret-clientID-here',
			'clientSecret' 	: 'your-client-secret-here',
			'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
		},
		
		'instagramAuth' : {
			'clientID' 		: '6c18558803224e43830a80c9c0471fd9',
			'clientSecret' 	: '3890288348c9461ea12018809c647abd',
			'callbackURL' 	: 'http://fxf.herokuapp.com/auth/instagram/callback'
		}

	};
} else {
	module.exports = {

		'facebookAuth' : {
			'clientID' 		: '664776126950502', // your App ID
			'clientSecret' 	: 'd2df580ad29bcc9b79ddc84a2ae1b7bc', // your App Secret
			'callbackURL' 	: 'http://10.0.33.34/auth/facebook/callback'
		},

		'twitterAuth' : {
			'consumerKey' 		: 'WNkqM0RcNK5yIjMOAQK5wlL5U',
			'consumerSecret' 	: 'dtGP3XtX4WYubroMkIZeShY8Ff3RGfAG6jPQbTUKcxGPLbkHsV',
			'callbackURL' 		: 'http://10.0.33.34/auth/twitter/callback'
		},

		'googleAuth' : {
			'clientID' 		: 'your-secret-clientID-here',
			'clientSecret' 	: 'your-client-secret-here',
			'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
		},
		
		'instagramAuth' : {
			'clientID' 		: '433456dd30b845a6a936e70ea82c29da',
			'clientSecret' 	: '791bdc303f0d4d1fba3facad3da54ee0',
			'callbackURL' 	: 'http://10.0.33.34/auth/instagram/callback'
		}

	};
}