#!/usr/bin/env node

// console.log(process.argv)


import yargs from "yargs"
import fileObj from './fsops/fileops.js'

import dirObj from './fsops/directoryops.js' 
 
const options = yargs
 .usage("Usage: -fp <filePath>")
 .usage("Data: -d <fileData>")
 .option("f", { alias: "filePath", describe: "File path", type: "string", demandOption: false })
 .argv

 
 const {argv,option} = yargs


// Initial path
// var dirPath = "./bin";
// const response = dfs(dirPath);


yargs
    .command('chdir', 'Change Directory', () => {
        process.chdir(argv.dirPath)
        console.log(`Change Directory to :  ${argv.dirPath}`)
        console.log(`Current Working Directory : ${process.cwd()}`)
    })
    .command('cwd', 'Change Directory', () => {
        console.log(`Current Working Directory : ${process.cwd()}`)
    })
    .command('traversedir', 'traverse directory', () => {
        option("dirPath", { alias: "dirPath", describe: "folder path", type: "string", demandOption: true })
    }, (argv) => {
        // var dirPath = "./fsopsTest";
        const response = dirObj.traverse(argv.dirPath)
        console.log(response)
    })
    .command('dir', 'Create folder ', () => {
        option("dirPath", { alias: "dirPath", describe: "folder path", type: "string", demandOption: true })     
    }, (argv) => {
            dirObj.create(argv.dirPath)
    })
    .command('deletedir', 'Create folder ', () => {
        option("dirPath", { alias: "dirPath", describe: "folder path", type: "string", demandOption: true })
          
    }, (argv) => {
         
            dirObj.delete(argv.dirPath)
       
    })
    .command('read', 'Read File', () => {
        fileObj.read(argv.filePath)
    })
    .command('delete', 'Delete File', () => {
        fileObj.delete(argv.filePath)
    })
    .command('create', 'Create File', () => {
        option("d", { alias: "data", describe: "Filedata", type: "string", demandOption: false })
    }, (argv) => {
        const data = argv.data || ''
        fileObj.create(argv.filePath,data)
    })
    .command('append', 'Append data to file', () => {
        console.log("Inside Append data to file")
        option("d", { alias: "data", describe: "Filedata", type: "string", demandOption: true })
    }, (argv) => {
        const data = argv.data || ''
        fileObj.append(filePath,data)
    })
    .argv
 