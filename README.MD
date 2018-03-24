Installation Guide

1) Download the latest node version from https://nodejs.org/en/download/ .

2) zone-sfed-task is a GitHub project.
If you choose to install GitHub desktop and Git Shell then the project could be downloaded using command “git clone  https://github.com/soumya-sundar/zone-sfed-task.git ” in Git shell. 
 If you choose not to use GitHub tools you could simply download and extract the project from the link - https://github.com/soumya-sundar/zone-sfed-task.git

3) The App uses MongoDB hence MongoDB installation is essential. Downloads are available in
     https://www.mongodb.com/download-center#community .

4) After extracting the project, navigate to the project root path and locate package.json file. This file contains all the necessary libraries/packages to run the application. Using your preferred terminal ( i.e., Git shell or cmd prompt) navigate to the project root path and run “npm install” command. After successful installation you will be able to find node_modules folder in the same path.

5) Run the following commands to start the application -
Start MongoDB server - “npm run mongo”

Load files in input_files directory in MongoDB. A collection named employee and salary will be created. This command should be run only once - “npm run loadDB”. As soon as the Mongo collection is created the process can be stopped.

Start Server side Node Express program - “npm run server”
Start Client side program - “npm run client”
Open http://localhost:3000/ in your browser.
Enter employee number between 1 and 10 and click search
