# Welcome to my Blockchain demonstration repository
This repository is put together to demonstrate my skills in both Ethereum Solidity and Hyperledger Fabric.   I have included a number of different elements to demonstrate as part of the standard SDLC process (plus business requirements).   

__NOTE:__  There will be both an Ethereum and Hyperledger Fabric implementation committed to this repository.  The initial implementation that is being flushed out is for an Ethereum implementation using Solidity, Truffle frameworks and Mocha for testing.   Following the completion of this will be the Hyperledger Fabric implementation with a deployable .BNA file that can be run on IBM's Bluemix DAPP.

## 1. Application Overview
## 2. Blockchain Requirements Analysis
## 3. Blockchain Architecture
## 4. Blockchain Development
## 5. Blockchain Execution
## 6. Blockchain Testing
---------------------------------------------------
## 1.  Application Overview
__What is this?__
The original idea behind this repository is based on the annoyance of robocalls and how a small blockchain solution might help catalog and automate a response to the FTC.   A recent article from Wall Street Journal discusses the original problem as well.  [The WSJ article can be found here (possible paywall article)](https://www.wsj.com/articles/why-there-are-so-many-robocalls-heres-what-you-can-do-about-them-1530610203?mod=hp_lead_pos8)

The application will consist of a small set of screens.  The screens will allow the user to add a robocall number to the list in a "quick" fashion.  Or there will be a method to add the robocall number in a more detailed fashion with additional information.   Each of the added robocall numbers will create a transaction that will be put on the blockchain.  After a given number of calls are "cataloged", then the system will automatically create and send a boiler-plate response to the FTC (Federal Trade Commision).

Screen mockups:
![Main Page Mockup](https://github.com/jconnelly/Blockchain/blob/master/Robocall_Main_Page.png "Robocall Main Page Mockup")
![Detail Page Mockup](https://github.com/jconnelly/Blockchain/blob/master/Robocall_Detail_Page.png "Robocall Detail Page Mockup")

## 2.  Blockchain Requirements Analysis
This section will document the 6 elements of a good requirements based design for the robocall application, plus the 7th element of Testing.   

    1. Guiding Principals
    2. Personas
    3. User Stories
    4. Functional Requirements
    5. Technical Requirements
    6. Tasks
    7. Testing Requirements

Even though an extremely important part of any good blockchain design is to utilize Test Driven Development and test thoroughly in each of the steps listed in the top section above.  It would be very time consuming to document this all here and I have instead chosen to simply pull all the testing down and into the last section.

#### Guiding Principals
* Will the application be feature heavy to account for all scenarios possible?
* Will the application be straight forward and easy to use so no help guides or additional documentation will be necessary?
* Will the application be centrailized or decentralized?
* Will the application be smart enough to validate input information on the fly?
* Will the application be worthwhile to the users?
* Does the application need to take into account user security or privacy?

#### Personas
1. Bob is a manager at a local restaurant.  He is upset that ever year from January to April, he gets constant calls from people claiming to be from the IRS when they are clearly not.   He wants to have a way to report these phony calls to the proper people who can do something about it, but doesn't have the time to go through all the governement sites to get the information.   Bob also doesn't want to fill out a lot of additional forms simply to add the fake robocall caller ID's.  This process of giving these fake callers information to a website takes too much time out of his day.

2. Bob enjoys his old cars and likes to restore them with vintage parts.  He as a network of other vintage car restorers that he meets up wtih occasionaly to share stories and trade parts with.  Unfortunately he hates that he gets calls from warranty companies offering an auto warranty for his vintage cars.  He has heard from his other auto restorers that they are getting calls like this all the time as well.   He wishes that there was an easy way to report these companies and their phone numbers to the government so they can do something about it.  

#### User Stories
Bob is finally glad that there is a way to quickly address these annoying IRS and warranty company calls.   He is able to copy the phone number of the company that calls him, open up a webpage on his computer or smart phone, and simply add the number and forget about it.   He knows that when he adds the number to system that it will automatically generate a letter and send it to the correct department at the FTC.   When he is particularly upset with the company that called him, he can easily go into the detailed information page and add more information to help the FTC identify where these calls are coming from and who they are going to, all without Bob giving out any of his personal information.  Sometimes when he has time, he looks at the other numbers to see if his other restorer friends has entered in a phone number that he has gotten as well, and how many times it has been logged.

#### Functional Requirements
* The main page of the application will show a small handful of components
* Quickly add just a phone number to the list of phone numbers in the system.
* Add in a more detail phone call information link for further information input.
* Show detail information page, including: Phone number, time of phone call, type of phone call received, and a method(button/link) of adding the information to the list of other numbers.
* Show existing phone numbers that have been entered into the system.
* Show existing phone numbers by the amount of times(count) they have been entered into the system.
* Show whether that phone number has been reported and sent to the FTC.
* Generate a form to send to the FTC directly that contains additional information necessary on the form, ie: Phone number, time of call, type of phone recieved on, and location (city/zipcode). 

#### Technical Requirements
* The main page of the application will show a small handful of components
    * At the top of the main page will be a title bar
    * The title bar should have a label: Robocall Logger
    * There should be a label, text field and button for quickly adding a number
    * There should be a label and button for addinga  detailed record
    * There should be a large frame in the middle of the page with a label and one to many records listed 
    * There should be a large footer button that will allow for creating a custom report to the FTC
    
* Quickly add just a phone number to the list of phone numbers in the system.
    * A label should be added to the main page on the left hand center side
    * The label should be: Add Quick Caller ID
    * A text field should be added to the main page under the label created above
    * The text field should be pre-populated with light grey text: Caller ID Number
    * A button on the right side of the text field should simply say "Add" 
    * Clicking on the "Add" button should create a new row of information in the "Current Robocall Records" main frame
    
* Add in a more detail phone call information link for further information input.
    * A label should be added to the main page on the right hand center side
    * The label should be: Add Detailed Call
    * A button should be directly under the label
    * The button should have a label of: Add
    
* Show existing phone numbers that have been entered into the system.
    * A new page should open up and contain a number of elements on the page
    * At the top of the page will be a title bar, identical to the title bar on the main page
    * A label should be present and centered under the title bar: Detailed Robocall Information
    * There should be a label on the left portion of the page: Caller ID Number
    * There should be a text field to the right of the label creaed above.
    * There should be a label on the left portion of the page, under the previous label:  Time of call
    * There should be a text field to the right of the previous label, ensure that the time is 12Hour clock with AM/PM
    * There should be a label on the left portion of teh page, under the precious label:  Home or Cellphone
    * There should be a drop down field to the right of the previous label.  
    * The values in the drop down field should be: Home, Cellphone, Office
    * There should be a button centered on the page with a label of: Add
    * Clicking on the "Add" button will make the application go back to the main page and create a new row of information in the "Current Roboball Records" main frame

* Show existing phone numbers that have been entered into the system.
    * The main page of the application should show a listing of one to many new records in the "Current Robocall Records" frame
    * Each individual number entered should have its own row in the frame, containing the robocall phone number, the times it has been entered into the system and an indicator for whether number has been sent to the FTC 
    * Each row should contain the following data:
        * Label: Robocall Number
        * Under the "Robocall Number" label will be a data driven label containing the robocall number
    
* Show existing phone numbers by the amount of times(count) they have been entered into the system.
    * The main page, Current Robocall Records frame, should contain a number, driven by the phone number record count, that show the amount of times people have entered the number
        * Label: Calls Cataloged
        * Under the "Calls Cataloged" label will be a data driven label containing the number of time a number has been recorded to the blockchain
    
* Show whether that phone number has been reported and sent to the FTC.
    * The main page, Current Robocall Records frame, should contain a checkbox, showing whether or not the caller ID number has been reported to the FTC or not.
        * Label: Reported?
        * Under the "Reported?" label will be a checkbox indicating where the number has been reported to the FTC

* Generate a form to send to the FTC directly that contains additional information necessary on the form, ie: Phone number, time of call, type of phone recieved on, and location (city/zipcode). 
    * Clicking the "Generate an FTC Report" button will take the user to the generate report page, where they have the ability to create their own one-off report

#### Tasks
(TO DO:  Add in the task list and grid)

#### Testing Requirements
There will need to be a set of requirements around testing this application.   The testing needs to contain both front end testing of the user interface pages, as well as, the technical components behind the scenes.

Front End - User Interface
To perform a set of tests on the user interface, a series of questions and Yes/No answers can be created to effectively test a small application such as this:
1. Did the main page load?  Y/N
2. Was I able to enter in a phone number in the "Quick Caller ID" section?  Y/N
3. Did the "Quick Caller ID - Add" button work and give me a response saying my number was added? Y/N
4. When I clicked the "Add" button on "Add Detailed Caller Info", did it open a new screen?  Y/N
5. Does the "Current Robocall Records" show a listing of numbers and information?  Y/N
6. When I clicked the "Generate an FTC Report" button, did it open a new screen?  Y/N
7. When I am viewing the "Detailed Robocall Information" page, is the caller id number field empty?  Y/N
8. When I am viewing the "Detailed Robocall Information" page, does the caller id number field accept my number?  Y/N
9. When I am viewing the "Detailed Robocall Information" page, is the time of call field empty?  Y/N
10. When I am viewing the "Detailed Robocall Information" page, does the time of call field accept a time?  Y/N
11. When I am viewing the "Detailed Robocall Information" page, does the home or cell drop down field have two selections?  Y/N
12. When I am viewing the "Detailed Robocall Information" page, can I select one of the options in the home or cell dropdown?  Y/N
13. When I am viewing the "Detailed Robocall Information" page, does the Add button appear?  Y/N
14. When I am viewing the "Detailed Robocall Information" page, does the Add button work when pressed?  Y/N
15. When I am viewing the "Detailed Robocall Information" page, when the Add button is pressed did the page refresh back to the main index page?   Y/N

System - Application
To perform a set of tests on the application backend itself, these questions will be built inside of test case written in Javascript.  These test cases could be separated into a suite of tests, but for this short application, we will just consolidate them into one test file, located in the "test" folder, under each blockchain system folder.
1.  Test the creation of the factory method to create a new robocaller instance
2.  Test the creation of a new robocall record 
3.  Test the creation of a new ftc report
4.  Test the number of current robocall records

## 3.  Blockchain Architecture
The application would be an Ethereum based application as there is no need for a permissioned blockchain.  This is a fairly straight-forward application that doesn't need to maintain or even contain any personal identifiable information (PII).  

The application front end will be developed using React frameworks to build the User Interface.  The React components will then interface with the Ethereum blockchain to log the numbers to the blocks.  

The application blockchain components will be developed using Solidity.  Deploying the components locally will be completed using NPM and NodeJS

The application blockchain testing will be completed using Mocha.  Test cases will be written to handle each of items listed in the Functional Requirements section listed above. 

(TO DO:  Diagram of architecture)

## 4.  Blockchain Development
Code sets are broken out into multiple folders and groups in the project according to functionality:
* /components
    * contains reusable components for the server side pages
* /ethereum
    * contains contract(s) and build(JSON) scripts
* /pages
    * contains server side (.js) files that will render the application
* /test
    * contains test cases 
        
Initial contract development was created in Remix, to build the contract and initial testing.   The contract was then copied down into the /ethereum/contracts directory to be compiled down(create address) and used by the other components of the application.  

Contract design/layout:
The full contract details won't be listed here, however, it can be viewed in the ethereum_project/ethereum/contracts folder.  The function declarations(frameworks) are listed here: 

```
pragma solidity ^0.4.17;

contract RobocallFactory {
    function createRobocallRecord
    function getRobocallRecords
}

contract Robocaller {
    struct RobocallerInformation
    function Robocaller
    function createNewRobocallRecord
    function getFTCReported
    function getRobocallCount
    function createUniqueFTCReport   
}
```

## 5.  Blockchain Execution
In order to run the program by itself, in a local environment on your own machine, it will be necessary to have a properly configured environment first.   This set of instructions assumes that you have NPM installed on your machine and can run command line instructions.   If it is necessary to install NPM, follow the instructions here: https://www.npmjs.com/get-npm

*NOTE:  Please understand that the versions of the programs that will be installed under NPM were the versions that I used when writing and testing the application.   They may work with newer versions or some of the functions may be deprecated as well. 

To run the Ethereum Project, here are the following instructions:
(Removing until the project is complete, just in case)
1. Create a local folder that will be used to pull down the repository
2. Open a command prompt or terminal window and navigate to the folder location created above
3. Command:  git clone jconnelly/Blockchain/ethereum_project
4. Command:  npm init       (continue to hit return for each of the questions/options until done)
5. Command:  npm install --save ganache-cli mocha solc fs-extra web3@1.0.0-beta.26 next-routes semantic-ui-react semantic-ui-css next@4.1.4 react react-dom truffle-hdwallet-provider
6. Navigate to the ethereum folder
7. Command:  node compile.js
8. Command:  node deploy.js
9. The command prompt/terminal screen should show two messages:
* a.  Attempting to deploy from account 0x........ (this will be an actual address here)
* b.  Contract deployed to:  0x....... (this will be an actual address here)
10. At this point the command prompt/terminal window will most likely be stuck in this position with no way to enter input.   Ctrl+Z to stop the service to allow for further command entries
11. Command:  npm run dev
12. This will start the server and open a port to allow for viewing the server side, React, application.   The default setting for this server is port: 3000
* a.  Ready on localhost:3000
13. Open a web browser (preferred is Chrome) and enter in http://localhost:3000

## 6.  Blockchain Testing
This section describes the step necessary to run and test the test case that is created in the Test folder under each of the blockchain systems.   In order to run the tests it will be necessary to make sure that your system is setup the same way as in Section 5.  Blockchain Execution.    Once that configuration and setup is complete, then the test can be run properly. 

To run the Ethereum Project, here are the following instructions:
1. Ensure that you are still in the same terminal or command prompt window fron Section 5 Blockchain Execution above.  This should ensure that all of the setup and deployment has been done from steps 1 thru 8.
2. Navigate to the root of the project, the folder "ethereum_project"
3. Command:  npm run test
4. The command will run the test file in the "test" folder and give a set of pass or fail messages.   If all of the files from the downloaded repository have not changed, then the messages should show (5) passing tests. The following should appear:

* (green checkmark)deploys a factory and a robocaller
* (green checkmark)sets the new user as a robocall creator
* (green checkmark)allows a user to create a new robocall record on the system (timing will appear here)
* (green checkmark)checks to see how many robocall records are on the system (timing will appear here)
* (green checkmark)generates a new FTC record (timing will appear here)

* (in green text) 5 passing (timing will appear here)

