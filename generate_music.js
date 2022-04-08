// chuẩn bị dữ liệu phát nhạc
var fs = require('fs');
var files = fs.readdirSync('./src/audio');
var images = fs.readdirSync('./src/img');
var path = require('path');
var json = [];
function generate(){
    files.forEach(function(i){
        var name=i.split('.')[0];
        json.push({
            name,
            file:i,
            img:name+'.jpg'
        });
    })
    if(!fs.existsSync('db.json')){
        fs.appendFile('db.json',JSON.stringify(json),function(err){
            if(err)
                console.log(err)
        })
    }

}
generate();

