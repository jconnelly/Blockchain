# Welcome to my Blockchain demonstration repository
This repository is put together to demonstrate my skills in both Ethereum Solidity and Hyperledger Fabric.   I have included a number of different elements to demonstrate as part of the standard SDLC process (plus business requirements).   

__NOTE:__  There will be both an Ethereum and Hyperledger Fabric implementation committed to this repository.  The initial implementation that is being flushed out is for an Ethereum implementation using Solidity.   Following the completion of this will be the Hyperledger Fabric implementation with a deployable .BNA file that can be run on IBM's Bluemix DAPP.

These include: 
## 1. Application Design
## 2. Blockchain Requirements Analysis
## 3. Blockchain Architecture
## 4. Blockchain Development
## 5. Blockchain Execution (runtime locally)
## 6. Blockchain Testing

__What is this?__
The original idea behind this repository is based on the annoyance of robocalls and how a small blockchain solution might help catalog and automate a response to the FCC.   A recent article from Wall Street Journal discusses the original problem as well.  [The WSJ article can be found here (possible paywall article)](https://www.wsj.com/articles/why-there-are-so-many-robocalls-heres-what-you-can-do-about-them-1530610203?mod=hp_lead_pos8)

## 1.  Application Design
The application will consist of a small set of screens.   The screens will allow the user to add a robocall number to the list in a "quick" fashion.  Or there will be a method to add the robocall number in a more detailed fashion with additional information.   Each of the added robocall numbers will create a transaction that will be put on the blockchain.  After a given number of calls are "catalogued", then the system will automatically create and send a boiler-plate response to the FTC (Federal Trade Commision).

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

#### Functional Requirements

#### Technical Requirements

#### Tasks

#### Testing Requirements

## 3.  Blockchain Architecture
Attached is a mockup screen set of the application that will be running on top of the blockchain allowing the users to enter in a number that they recieve over the phone.   If the number that they got is the same as a number that was already logged, then they have the option of simply incrementing the counter to indicate the same call details came to them.

## 4.  Blockchain Development
(links and discussions to the codebase within the folder sets)

## 5.  Blockchain Execution
(discussions about how to download the github repo and run it locally to play around with it)

## 6.  Blockchain Testing
(discussions about how to download the github repo and run the test locally (ganache/mocha/etc))
