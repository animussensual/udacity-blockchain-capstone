const ERC721EnumerableWithMetaData = artifacts.require('ERC721EnumerableWithMetaData');
const truffleAssert = require('truffle-assertions');

contract('ERC721EnumerableWithMetaData', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await ERC721EnumerableWithMetaData.new("sym", "name", "url/");
            await this.contract.mint(account_one, 1, {from: account_one});
            await this.contract.mint(account_one, 2, {from: account_one});
        })

        it('should return total supply', async function () {
            const totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 2);
        })

        it('should get token balance', async function () {
            const balance = await this.contract.balanceOf(account_one);
            assert.equal(balance, 2);
        })

        it('should return token uri', async function () {
            const tokenURI = await this.contract.tokenURI(1);
            assert.equal(tokenURI, 'url/1');
        })

        it('should transfer token from one owner to another', async function () {
            await this.contract.transferFrom(account_one, account_two, 1, {from: account_one});
            const balance = await this.contract.balanceOf(account_one);
            assert.equal(balance, 1);
            const newBalance = await this.contract.balanceOf(account_two);
            assert.equal(newBalance, 1);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721EnumerableWithMetaData.new("sym", "name", "url");
        })

        it('should return contract owner', async function () {
            const owner = await this.contract.getOwner();
            assert.equal(owner, account_one);
        })

        it('should fail when minting when address is not contract owner', async function () {
            try {
                await this.contract.mint(account_two, 1, {from: account_two});
            } catch (e) {
                assert.equal(e.reason, "Only owner");
            }

        })
    });
})