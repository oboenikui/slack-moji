(function () {
    window.addEventListener("load", function () {
        document.getElementById("submit").addEventListener("click", function () {
            var fontName = document.getElementById("font").value || "'Yu Gothic','Meiryo','MS Gothic','Hiragino Sans'";
            var canvas = document.getElementById("canvas");
            canvas.height = 128;
            canvas.width = 128;
            var context = canvas.getContext("2d");
            context.font = "bold 128px " + fontName;
            context.textBaseline = "middle";
            var zip = new Zip();
            for (var i = "ぁ".charCodeAt(0); i <= "ん".charCodeAt(0); i++) {
                context.fillStyle = "white";
                context.fillRect(0, 0, 128, 128);
                context.fillStyle = "black";
                var char = String.fromCharCode(i);
                context.fillText(char, 0, 70);
                zip.addFile(canvas.toDataURL().split(",")[1], char + ".png");
            }
            for (var i = "ァ".charCodeAt(0); i <= "ヶ".charCodeAt(0); i++) {
                context.fillStyle = "white";
                context.fillRect(0, 0, 128, 128);
                context.fillStyle = "black";
                var char = String.fromCharCode(i);
                context.fillText(char, 0, 70);
                zip.addFile(canvas.toDataURL().split(",")[1], char + ".png");
            }
            zip.output();
        });
    });
})();
