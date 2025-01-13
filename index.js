import fs from "node:fs/promises";
import fsa, { rename } from "node:fs";

// Q: 1
// ----------------------------------
// async function myReadFile() {
//     try {
//         const data = await fs.readFile('C:\\Users\\yduda\\Documents\\SVCollege-FullStackCourse\\MyLesson10 - JS Nodejs intro\\input.txt', { encoding: 'utf8' });
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }
// myReadFile();


// Q: 2
// ----------------------------------
// function myAppendFile() {
//     let message = "Output.txt: Yossi Dudai";
//     fs.appendFile('C:\\Users\\yduda\\Documents\\SVCollege-FullStackCourse\\MyLesson10 - JS Nodejs intro\\output.txt', message, (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("append is ok");
//         }
//     })
// }
// myAppendFile();


// Q: 3
// ----------------------------------
// function myTimeStemp() {
//     let message = Date.now().toString();
//     fs.appendFile('C:\\Users\\yduda\\Documents\\SVCollege-FullStackCourse\\MyLesson10 - JS Nodejs intro\\log.txt', message, (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("append is ok");
//         }
//     })
// }
// myTimeStemp();

Q: 4
//----------------------------------
// async function myReadFile() {
//     try {
//         const data = await fs.readFile('C:\\Users\\yduda\\Documents\\SVCollege-FullStackCourse\\MyLesson10 - JS Nodejs intro\\inputtt.txt', { encoding: 'utf8' });
//         console.log(data);
//     } catch (err) {
//         console.log(err.message);
//     }
// }
// myReadFile();

//Q: 5
//----------------------------------
// function createDir() {
//     const folderName = './TestFolder';
//     fs.mkdir(folderName, (err) => {
//         if (err) {
//             return console.error(err);
//         }
//         console.log('Directory created successfully!');
//     })
// }
// createDir();

//Q: 6
//----------------------------------
// function createDir2() {
//     const folderName = './TestFolder';
//     try {
//         if (!fsa.existsSync(folderName)) {
//             fs.mkdir(folderName, (err) => {
//                 if (err) {
//                     return console.error(err);
//                 }
//                 console.log('Directory created successfully!');
//             })
//         }
//     } catch (e) {
//         console.log(e.message);
//     }
// }
// createDir2(2);


//Q: 7
//----------------------------------
// function delFolder() {
//     const folderName = './TestFolder';
//     fs.rmdir(folderName, { recursive: true, force: true }, err => {
//         if (err) {
//             throw err;
//         }
//         console.log(`${dir} is deleted!`);
//     })
// }
// delFolder();


//Q: 8
//----------------------------------
// async function renFile() {
//     const oldfName = './oldFile.txt';
//     const newfName = './newFile.txt';

//     try{
//         await fs.rename(oldfName, newfName);
//     } catch(err){
//         console.log(err.message);
//     }

// }
// renFile();


//Q: 9
//----------------------------------
// async function listFiles() {
//     try {
//         const dirName = 'C:/Users/yduda/Documents/SVCollege-FullStackCourse/MyLesson10 - JS Nodejs intro';
//         const files = await fs.readdir(dirName);
//         for (const file of files) {
//             console.log(file);
//         }

//     } catch(err) {
//         console.error(err.message);
//     }
// }
// listFiles();

//Q: 9 B
//----------------------------------
// function listFiles2() {
//     const dirName = 'C:/Users/yduda/Documents/SVCollege-FullStackCourse/MyLesson10 - JS Nodejs intro';
//     const data = fs.readdir(dirName);
//     data.then(
//         function(value) { console.log(value) },
//         function(error) { /* code if some error */ }
//     )
// }
// listFiles2();


//Q: 10
//----------------------------------
// import readline from "node:readline";
// function readFileLineByLine() {
//     let myInterface = readline.createInterface({
//         input: fsa.createReadStream("input.txt")
//     });

//     let lineno = 0;
//     myInterface.on('line', function (line) {
//         lineno++;
//         console.log('Line number ' + lineno + ': ' + line);
//     });
// }
// readFileLineByLine() ;

//Q: 11
//----------------------------------
// function writeJson() {
//     let student = {
//         name: 'Mike',
//         age: 23,
//         gender: 'Male',
//         department: 'English',
//         car: 'Honda'
//     };

//     //let data = JSON.stringify(student);
//     let data = JSON.stringify(student, null, 2);
//     fsa.writeFileSync('student.json', data);
// }
// writeJson();

//Q: 12
//----------------------------------
// function readJson() {
//     let rawdata = fsa.readFileSync('student.json');
//     let student = JSON.parse(rawdata);
//     console.log(student);
// }
// readJson();

//Q: 13
//----------------------------------
// function copyFiles() {
//     fsa.copyFile('input.txt', 'input_copy.txt', (err) => {
//         if (err) {
//             console.log("Error Found:", err);
//         } else {
//             console.log("File input.txt Contents is copied to input_copy.txt:")
//         }
//     })
// }
// copyFiles();


//Q: 14
//----------------------------------
// function moveFile() {
//     // Source file 
//     const src = "./input.txt";

//     // Destination path 
//     const dest = "backup/input.txt";
//     fs,rename(src, dest, (err) => {
//         if (err) return console.log(err);
//         console.log(`File successfully moved!!`);
//     });
// }
// moveFile();

//Q: 15
//----------------------------------
// import path from "node:path";
// function delFiles() {
//     const directory = 'tempFiles';
//     const files = fsa.readdirSync(directory);
//     files.forEach(file => {
//         const filePath = path.join(directory, file);
//         fsa.unlinkSync(filePath);
//     });
// }
// delFiles() ;

//Q: 16
//----------------------------------
// can be a filename or a directory...
// function watchChanges() {
//     const fileToWatch = './backup'

//     fs.watch(fileToWatch, (eventType, fileName) => {
//         if (eventType === 'rename') {
//             console.log(`${fileName} was added/deleted`);
//         } else {
//             console.log(`${fileName} was updated`);
//         }
//     });
// }
// watchChanges();

//Q: 17
//----------------------------------
// function getFilesSize() {
//     let stats = fsa.statSync("input.txt")
//     let fileSizeInBytes = stats.size;
//     // Convert the file size to megabytes (optional)
//     let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
//      console.log("fileSizeInBytes " + fileSizeInBytes);
// }
// getFilesSize();


//Q: 18
//----------------------------------
// import path from "node:path";
// function createFiles() {
//     // Specify the directory path where you want to create the files
//     const directoryPath = './tempFiles';

//     // Create an array of file names you want to create
//     const fileNames = ['file1.txt', 'file2.txt', 'file3.txt'];

//     // Loop through the file names and create each file
//     fileNames.forEach((fileName) => {
//         // Construct the file path by joining the directory path and the file name
//         const filePath = path.join(directoryPath, fileName);

//         // Use the `fs.writeFile` function to create the file
//         fsa.writeFile(filePath, '', (err) => {
//             if (err) {
//                 console.error(`Error creating file ${filePath}:`, err);
//             } else {
//                 console.log(`File ${filePath} created successfully.`);
//             }
//         });
//     });
// }
// createFiles();

//Q: 19
//----------------------------------
// async function countFiles() {
//     try {
//         const dirName = 'C:/Users/yduda/Documents/SVCollege-FullStackCourse/MyLesson10 - JS Nodejs intro';
//         const files = await fs.readdir(dirName);
//         let i = 0;
//         for (const file of files) {
//             i++;
//         }
//         console.log("Number of files: " + i);
//     } catch (err) {
//         console.error(err.message);
//     }
// }
// countFiles();

//Q: 20
//----------------------------------
function mergeFiles() {
    myReadFileContent('C:\\Users\\yduda\\Documents\\SVCollege-FullStackCourse\\MyLesson10 - JS Nodejs intro\\file1.txt');
    myReadFileContent('C:\\Users\\yduda\\Documents\\SVCollege-FullStackCourse\\MyLesson10 - JS Nodejs intro\\file2.txt');
}    


function myReadFileContent(fileName) {
    const data = fs.readFile(fileName, { encoding: 'utf8' });
    let pr = data.then(
        async function getValue(value) {
            console.log(value);
            await fs.appendFile("file3.txt", value + "\n")
        },
        function (error) { throw error }
    )
    
}

mergeFiles();
