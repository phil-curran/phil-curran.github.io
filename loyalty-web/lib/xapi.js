// Generate random email address for user
var email = 'phil.curran@redfin.com';
if (email === null) {
	var num = Math.floor(Math.random() * 50000) + 1;
	email = 'User' + num + '@user.com';
	localStorage.setItem('email', email);
}
function sendStatement(verbId, verb, objectId, name, description, score, success) {
	var conf = {
		"endpoint": "http://ec2-52-53-202-194.us-west-1.compute.amazonaws.com/data/xAPI/", // Put your LRS endpoint here with a / after xapi.
		"auth": "Basic " + toBase64("4d593568d2f6cb2263633cea894b12ba7d724d6c:9205728f9fc2e6413bc7ab0855784efbe9cfd21a") // Put your LRS username in, then a colon, and then your password. No spaces. This field defaults to the Test LRS.
	};
	ADL.XAPIWrapper.changeConfig(conf);
	//define the xapi statement being sent
	var statement = {
		'actor': {
			'mbox': 'mailto:' + email,
			'name': email,
			'objectType': 'Agent'
		},
		'verb': {
			'id': verbId,
			'display': {
				'en-US': verb
			}
		},
		'object': {
			'id': objectId,
			'definition': {
				'name': {
					'en-US': name
				},
				'description': {
					'en-US': description
				}
			},
			'objectType': 'Activity'
		},
		'result': {
			'score': {
				'scaled': 1,
				'min': 0,
				'max': 100,
				'raw': score
			},
			'success': success
		}
	}; //end statement definition

	// Dispatch the statement to the LRS
	var result = ADL.XAPIWrapper.sendStatement(statement);
}
