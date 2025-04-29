const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
// const lib_file = require('../LIB/lib');

module.exports ={
        fetchTextData:async function () {
        try {
            const filePath = path.join("./srv/sampleData.json");
            if (!fs.existsSync(filePath)) {
              return 'Text file not found.';
            }
            const content = fs.readFileSync(filePath, 'utf8');
            // console.log(content);
            var a = content.replaceAll('\n',"");
            return JSON.parse(a);
        }
        catch(error){
            return error;
        }
    },
    githubFetch:async function(req) {
        try {
        console.log(32);
        const filePath = path.join("./srv/sampleData.json");
        console.log(34);
        var oldData = await this.fetchTextData();
        console.log(filePath);
        var content = JSON.stringify(oldData);
        fs.writeFileSync(filePath, content);
        console.log(filePath);
        const git = simpleGit(path.join(__dirname,'..'));
        // const status = await git.status();
        // console.log(status);
        console.log(45);
          await git.add('../srv/sampleData.json');
          await git.commit('Updated file via githubFetch function');
          await git.push('origin', 'main');
        } catch (err) {
          console.error('Git operation failed:', err);
          req.error(500, 'Git push failed');
        }
        return 'File updated and pushed to GitHub';
    }
}