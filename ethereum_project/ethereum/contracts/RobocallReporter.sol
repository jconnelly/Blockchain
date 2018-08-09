pragma solidity ^0.4.17;

contract RobocallFactory {

    address[] public activeRobocalls;
    
    function createRobocallRecord(string callerIDNumber) public {
        
        address newRobocaller = new Robocaller(callerIDNumber, msg.sender);
        activeRobocalls.push(newRobocaller);
        
    }
    
    function getRobocallRecords() public view returns(address[]) {
        return activeRobocalls;
    }
    
}

contract Robocaller {
    
    address public robocallCreator;
    string public callerIDNumber;
    bool public ftcReported;
    RobocallerInformation[] public callers;

    struct RobocallerInformation {
        string callerIDPhoneNumber;
        uint timeOfCall;
        bool homeOrCell; // Home = true, Cell = false
        address caller;
        uint count;
        bool ftcReported;
    }

    modifier restricted() {
        require(msg.sender == robocallCreator);
        _;
    }
    
    function Robocaller(string incomingCallerIDNumber, address creator) public {
        robocallCreator = creator;
        callerIDNumber = incomingCallerIDNumber;
    }    
    
    function createNewRobocallRecord(string phoneNumber, uint timeOfCall, bool homeOrCell, address caller, uint count, bool ftcReported) public restricted {

        RobocallerInformation memory newCaller = RobocallerInformation({
            callerIDPhoneNumber: phoneNumber,
            timeOfCall: timeOfCall,
            homeOrCell: homeOrCell,
            caller: caller,
            count: count,
            ftcReported: ftcReported
        });
        
        callers.push(newCaller);
    }

    function getFTCReported() public view returns (bool, address) {

        return (
            ftcReported,
            robocallCreator
        );

    }

    function getRobocallCount() public view returns (uint) {
        return callers.length;
    }
    
    function createUniqueFTCReport(string phoneNumber, uint timeOfCall, bool homeOrCell, address caller) public restricted {

        RobocallerInformation memory newCaller = RobocallerInformation({
            callerIDPhoneNumber: phoneNumber,
            timeOfCall: timeOfCall,
            homeOrCell: homeOrCell,
            caller: caller,
            count: 1,
            ftcReported: true
        });
        
        callers.push(newCaller);
    }
}
