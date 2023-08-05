import fs from 'fs'
import path from 'path'

let dataArr=[]
let resultArr =[]
function dfs (dirPath, dirHist ="") {
     dataArr = getChildren(dirPath);
     resultArr[dirPath] = JSON.stringify(dataArr)
    try {
        dataArr.forEach((sFileOrDir, iIdx) => {
            // console.info(path.join(dirPath, sFileOrDir));    
            if (fs.statSync(path.join(dirPath, sFileOrDir)).isDirectory()) {
                let pathstr = path.join(dirPath, sFileOrDir);
                dfs(pathstr, dirHist ? `${dirHist}\\${sFileOrDir}` : sFileOrDir);
            } else {
                // File
                path.join(dirHist, sFileOrDir)
            }
        });
      return  resultArr
    } catch(e) {
        console.error(e);
    }
}

function getChildren (dirPath) {
    return fs.readdirSync(dirPath) 
}
 
// Initial path
var dirPath = "./bin";
const response = dfs(dirPath);
console.log(response)