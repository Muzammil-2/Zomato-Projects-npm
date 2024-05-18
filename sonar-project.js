const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.233.118.37:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS for zomato application',
	    'sonar.projectName': 'Node JS Application - Zomato',
	    'sonar.projectKey':'app_zoma',
	    'sonar.login': 'sqa_ff3c9b994300df0cfa204cd5f79b10bf94efd0c7',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'9.9.5',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
