import fs from 'fs'
import path from 'path'

class DirectoryOps{

    constructor(){
        this.dataArr=[]
        this.resultArr =[]
    }

    getChildren (dirPath) {
        return fs.readdirSync(dirPath) 
    }

    dfs (dirPath, dirHist ="") {
        this.dataArr = this.getChildren(dirPath);
        this.resultArr[dirPath] = JSON.stringify(this.dataArr)
        try {
            this.dataArr.forEach((sFileOrDir) => {
                if (fs.statSync(path.join(dirPath, sFileOrDir)).isDirectory()) {
                    let pathstr = path.join(dirPath, sFileOrDir);
                    this.dfs(pathstr, dirHist ? `${dirHist}\\${sFileOrDir}` : sFileOrDir);
                } else {
                    // File
                    path.join(dirHist, sFileOrDir)
                }
            });
            return this.resultArr
        } catch(error) {
            console.error(`DirectoryOps: dfs  :  ${error}`)
        }
    }

    traverse =(dirPath)=>{
        return  this.dfs(dirPath)
    }

    create =(dirPath)=>{
        try {
            console.info(`DirectoryOps: create ${dirPath}`)
            if (!fs.existsSync(dirPath)){
                fs.mkdirSync(dirPath);
            }
            console.log(`Folder created ${dirPath}`)   
        } catch (error) {
            console.error(`DirectoryOps: create  :  ${error}`)
        }
    }
    delete =(dirPath)=>{
        try {
            console.info(`DirectoryOps: delete ${dirPath}`)
            fs.rmSync(dirPath, { recursive: true, force: true });
            console.log(`Folder deleted ${dirPath}`)   
        } catch (error) {
            console.error(`DirectoryOps: delete  :  ${error}`)
        }
    }
   
}

export default new DirectoryOps()

 