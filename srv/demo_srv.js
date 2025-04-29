const cds = require('@sap/cds');
// var textfile = require('textfile');
const fs = require('fs');
const path = require('path');
const lib_file = require('../srv/LIB/lib');
const { stringify } = require('querystring');
const { error } = require('console');
const simpleGit = require('simple-git');
const axios = require('axios');

module.exports = cds.service.impl(async function () {
            
    this.on('textFunc',async function (req) {
        try{
            // console.log(req)
            if(req.data.Name){
            var oldData = await lib_file.fetchTextData();
            console.log(oldData);
            var newData = {
                Name : req.data.Name,
                Email : req.data.Email,
                Age : req.data.Age
            }
            console.log(21);
            var content;
            // if(oldData.Data.length >= 0){
            oldData.Data.push(newData);
            console.log(23);
            content = JSON.stringify(oldData);
           
            const fileName = 'sampleData.json';
            console.log(28);
            const filePath = path.join(__dirname, '..', 'srv', fileName);
            fs.writeFileSync(filePath, content, 'utf8');
            // await lib_file.githubFetch();
            const fileContent = fs.readFileSync(filePath);
            await lib_file.updateGitFile(fileContent);
            return "Text File As Been Created";
            }
        }
        catch(error){
            return error;
        }
    }),
    this.on('textFileCall',async function(){
        try{
            var oldData = await lib_file.fetchTextData();
            return oldData;
        }
        catch(error){
            return error;
        }
    }),
    this.on('downloadJson',async function (req){
        try{
            const filePath = path.join("./srv/sampleData.json");
            const fileContent = fs.readFileSync(filePath);
            // var base64content = fileContent.toString("base64")      
            // var base64DataUri = 'data:'+'application/json'+';base64,' + base64content;
            // console.log(base64DataUri)
            req._.res.setHeader('Content-Disposition', 'attachment; filename="sampleData.json"');
            req._.res.setHeader('Content-Type', 'application/json');
            req._.res.send(fileContent);
            return;
        }catch(error){
            return error;
        }
    }),
    this.on('gitFunc', async function(req){
        
    });
    

})