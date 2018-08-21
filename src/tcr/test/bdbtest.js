import test from 'ava';
import * as driver from 'bigchaindb-driver';
import * as bdb from '../bdb/bdb';

test('should-create-asset', async t => {
    const user1 = new driver.Ed25519Keypair();
    const tx = await bdb.createNewAsset(user1, { 'name': 'test' }, null);
    console.log(tx);
    t.is(tx.asset.data.name, 'test', tx.asset.data.name);
});