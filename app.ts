/// <reference path="zip.ts" />

(() => {
    
    window.addEventListener("load", () => {
        document.getElementById("submit").addEventListener("click", () => {
            let fontName = (<HTMLInputElement>document.getElementById("font")).value || `'Yu Gothic','Meiryo','MS Gothic','Hiragino Sans'`;
            let canvas = <HTMLCanvasElement>document.getElementById("canvas");
            canvas.height = 128;
            canvas.width = 128;

            let context = canvas.getContext("2d");
            context.font = "bold 128px " + fontName;
            context.textBaseline = "middle";
            let zip = new Zip();
            for (var i = "ぁ".charCodeAt(0); i <= "ん".charCodeAt(0); i++) {
                context.fillStyle = "white"
                context.fillRect(0, 0, 128, 128);
                context.fillStyle = "black"
                let char = String.fromCharCode(i);
                context.fillText(char, 0, 70);
                zip.addFile(canvas.toDataURL().split(",")[1], char + ".png");
            }
            
            for (var i = "ァ".charCodeAt(0); i <= "ヶ".charCodeAt(0); i++) {
                context.fillStyle = "white"
                context.fillRect(0, 0, 128, 128);
                context.fillStyle = "black"
                let char = String.fromCharCode(i);
                context.fillText(char, 0, 70);
                zip.addFile(canvas.toDataURL().split(",")[1], char + ".png");
            }
            zip.output();
        })
    })


})()