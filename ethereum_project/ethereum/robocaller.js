import web3 from "./web3";
import RobocallerReporter from "./build/RobocallReporter.json";
import Web3 from "web3";

export default address => {
    return new web3.eth.Contract(JSON.parse(RobocallReporter.interface), address); 
};