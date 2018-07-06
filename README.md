# Welcome to my Blockchain demonstration repository
This repository is put together to demonstrate my skills in both Ethereum Solidity and Hyperledger Fabric.   I have included a number of different elements to demonstrate as part of the standard SDLC process (plus business requirements).   

__NOTE:__  There will be both an Ethereum and Hyperledger Fabric implementation committed to this repository.  The initial implementation that is being flushed out is for an Ethereum implementation using Solidity, Truffle frameworks and Mocha for testing.   Following the completion of this will be the Hyperledger Fabric implementation with a deployable .BNA file that can be run on IBM's Bluemix DAPP.

These include: 
## 1. Application Overview
## 2. Blockchain Requirements Analysis
## 3. Blockchain Architecture
## 4. Blockchain Development
## 5. Blockchain Execution (runtime locally)
## 6. Blockchain Testing

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
(TO DO:  Add in the testing overview)

## 3.  Blockchain Architecture
The application would be an Ethereum based application as there is no need for a permissioned blockchain.  This is a fairly straight-forward application that doesn't need to maintain or even contain any personal identifiable information (PII).  

The application front end will be developed using React frameworks to build the User Interface.  The React components will then interface with the Ethereum blockchain to log the numbers to the blocks.  

The application blockchain components will be developed using Solidity.  Deploying the components locally will be completely using Truffle and Ganache.

The application blockchain testing will be completed using Mocha.  Test cases will be written to handle each of items listed in the Functional Requirements section listed above. 

(TO DO:  Diagram of architecture)

## 4.  Blockchain Development
(TO DO: links and discussions to the codebase within the folder sets)

## 5.  Blockchain Execution
(TO DO: discussions about how to download the github repo and run it locally to play around with it)

## 6.  Blockchain Testing
(TO DO: discussions about how to download the github repo and run the test locally (ganache/mocha/etc))
