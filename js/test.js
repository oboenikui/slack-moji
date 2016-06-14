describe('zip', function () {
    var zip = new Zip();
    it('mkdir', function () {
        zip.mkdir("hoge/test");
        chai.assert.strictEqual(zip.existDir("hoge/test"), true);
    });
    it('addFile', function () {
        chai.assert.doesNotThrow(function () { zip.addFile(btoa("hogehoge"), "hoge/test/あ.txt"); });
    });
    it('output', function () {
        zip.output();
    });
});
