import fs from 'fs'

 
class FileOps{
    constructor() {
     
    }

     create =(filePath,data='')=>{
        try {
            console.info(`createFile ${filePath}`)
            fs.writeFileSync(filePath, data)
            console.log(`File created ${filePath}`)   
        } catch (error) {
            console.error(`createFile :  ${error}`)
        }
    }
    
   read =(filePath)=>{
      try {
        console.info(filePath)
        const data =  fs.readFileSync(`${filePath}`, 'utf-8')
        console.log(`File Data : `,data)
      } catch (error) {
        console.error(`readFile :  ${error}`)
      }
    }
    
   append =(filePath,data)=>{
        try {
            console.log(`appendFile ${filePath}`)
            const data =  fs.appendFileSync(filePath, data)
            console.log(`Data appended to file`)
        } catch (error) {
            console.log(error)
        }
    }
    
    
   delete =(filePath)=>{
        try {
            console.log(`deleteFile ${filePath}`)
            fs.unlinkSync(filePath);
            console.log(`File ${filePath} deleted!`)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new FileOps()
 