const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/RobocallFactory.json');
const compiledRobocaller = require('../ethereum/build/Robocaller.json');

let accounts;
let factory;
let robocallCreator;
let robocaller;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: 1000000 });

    await factory.methods.createRobocallRecord('100')
        .send({ from: accounts[0], gas: 1000000});

    [robocallCreator] = await factory.methods.getRobocallRecords().call();

    robocaller = await new web3.eth.Contract(
        JSON.parse(compiledRobocaller.interface),
        robocallerCreator
    );
});

describe('Robocaller', () => {
    it('deploys a factory and a robocaller', () => {
        assert.ok(factory.options.address);
        assert.ok(robocaller.options.address);
    });

    it('sets the new user as the robocall creator', async () => {
        const creator = await robocaller.methods.robocallCreator().call();
        assert.equal(accounts[0], creator);
    });

    it('allows a user to create a new robocall record on the system', async () => {
        await robocaller.methods
            .createNewRobocallRecord('555-123-4567', '08:00:00', true, accounts[1], '10', false)
            .send({
                from: accounts[0],
                gas: '1000000'
            });

        const newRobocaller = await robocaller.methods.callers(0).call();

        assert.equal('555-123-4567', newRobocaller.callerIDPhoneNumber);
        assert.equal('08:00:00', newRobocaller.timeOfCall);
        assert.equal(true, newRobocaller.homeOrCell);
        assert.equal('10', newRobocaller.count);
    });

    // Create test cases for additional functions in the robocaller contract
});
