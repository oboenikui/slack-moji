/// <reference path="typings/index.d.ts" />
/// <reference path="zip.ts" />

describe('zip', () => {
    var zip = new Zip();

    it('mkdir', () => {
        zip.mkdir("hoge/test")
        chai.assert.strictEqual(zip.existDir("hoge/test"), true);
    });

    it('addFile', () => {
        chai.assert.doesNotThrow(() => { zip.addFile(btoa("hogehoge"), "hoge/test/あ.txt") });
    })

    it('output', () => {
        zip.output();
    })
});