const express=require('express');
const app = express();
const path = require('path');  

app.listen(8080,function(){
    console.log('listening on 8080');

});


app.get('/', function(req, res) {
    console.log("dirname?:", __dirname);  // 현재 파일의 절대 경로 출력
    res.sendFile(path.join(__dirname, 'main/pages/index.html'));  // __dirname을 포함한 절대 경로로 지정
});





