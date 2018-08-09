
import web3 from './web3';
import CampaignFactory from './build/RobocallFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(RobocallFactory.interface),
    '0x6A1440bA264Ec7D3e782d35A6361228607fAC21a'
);

export default instance;

