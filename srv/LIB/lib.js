const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const axios = require('axios');


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
    },
  

    updateGitFile: async function (content) {
      try{
        console.log(50);
    require('dotenv').config();
    const token = ""; // Store token securely in environment
    console.log(token);
    const repoOwner = 'AniketSableTheDeveloper';
    const repoName = 'Task';
    const path = 'Task/sampleData.json';
    const branch = 'main';
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;
    
    console.log(url);

    let sha;
    try {
      // Step 1: Get the SHA of the existing file
      const getRes = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      sha = getRes.data.sha;
    } catch (err) {
      if (err.response?.status === 404) {
        console.log("🆕 File does not exist. It will be created.");
      } else {
        throw err; // rethrow other errors
      }
    }
    const base64Content = Buffer.from(content).toString('base64');
        const res = await axios.put(url, {
        message: 'Update file from deployed CAP app',
        content: base64Content,
        branch: branch,
        ...(sha ? { sha } : {})
        }, 
        {
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
        }
    });
    console.log(72);
    // console.log('File pushed successfully:', res.data);
    return res.data;
  }catch(error){return error}
    }
}