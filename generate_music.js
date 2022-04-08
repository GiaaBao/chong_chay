var fs = require('fs');
var files = fs.readdirSync('./src/assets/audio');
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
    if(!fs.existsSync('./src/assets/db.json')){
        fs.appendFile('./src/assets/db.json',JSON.stringify(json),function(err){
            if(err)
                console.log(err)
        })
    }

}
generate();

