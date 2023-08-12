/*const value = 50;
if (value < 40){
    console.log("Hello value");
}else {
    console.log("No Value");
}*/

//const { name3, name4 } = require("./modules");


//console.log(__dirname);
//console.log(__filename);

/*setInterval (() => {
    console.log("Hello Node Js");
}, 2000);*/


/*setTimeout (() => {
    console.log("Hello After 3 Secconds");
}, 3000);*/



/*const names = require('./modules');
const getFunction  = require('./functions');
const getobj = require('./object1');
//console.log(getobj);

const getSum = require('./multNumber');
console.log(getSum);

//console.log(names);



getFunction("Mena Ali");
getFunction(names.name1);
getFunction(names.name2);*/



/*
const os = require('os');

// get The hostname of the machine
const hostname = os.hostname();
console.log('HostName: ', hostname);


// get the operating System type
const type = os.type();
console.log('operating System: ', type);


// get the total amount of system memory
const totalMemory = os.totalmem();
console.log('the total of memory: ', totalMemory, 'byets');


// get the free amount of system memory
const freeMemory = os.freemem();
console.log('The total free memory: ', freeMemory, 'byets');


// get the CPU architecture
const arc = os.arch();
console.log('CPU Architecure: ', arc);



// get the network interface
const interface = os.networkInterfaces();
console.log('Network Interfaces: ', interface);

*/

/*const userIn = os.userInfo();
console.log(userIn);*/



// const path = require('path');
// const { PassThrough } = require('stream');
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));


// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));


// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// console.log(path.isAbsolute('./datajson'));

// console.log(path.join("/folder1", "//folder2", "index.html"));


// console.log(path.join(__dirname, "data.json"));



// const { error } = require("node:console");
// const fs = require("node:fs");
// const filecontent = fs.readFileSync("./file.txt", "utf-8");
// console.log(filecontent);


// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if (error){
//         console.log(error);
//     } else{

//         console.log(data)
//     }
// });

// // الطريقة المتزامنة
// fs.writeFileSync("./greet.txt", "Hello Team!");


// // الطريقة الغير متزامنة
// fs.writeFile("./greet.txt", "Welcome in My chanel!", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Writen");
//     }
// });

// const { error } = require("node:console");
// const fs = require("node:fs/promises");
// fs.readFile("file.txt", "utf-8")
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

// // الطريقة الغير متزامنه
// async function readFile() {
//     try {
//         const data = await fs.readFile("greet.txt", "utf-8");
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// readFile();




/*
const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();


const readaleStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
});

readaleStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

const writeableStream = fs.createWriteStream("./file2.txt");

readaleStream.pipe(writeableStream);*/



/*
readaleStream.on("data", (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
});*/







//const { constrainedMemory } = require("node:process");

    // const superHero = {
    //     firstName: 'Ahmed',
    //     lastName: 'Mahmoud',
    // };



    // res.writeHead(200, {"Content-Type": "application/json"});
    // res.end(JSON.stringify(superHero));

    const http = require("node:http");
    const fs = require("node:fs");

    const server = http.createServer((req, res) => {


        if (req.url === "/") {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Home page");
        } else if (req.url === "/about") {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("About page");
        } else if (req.url === "/api") {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(JSON.stringify({
                firstName: "Mahmoud",
                lastName: "Ali"
            }))
        } else if (req.url === "/contact") {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(JSON.stringify({
                number: 5252,
                address: "Qutor"
            }))
        } else {
            res.writeHead(404)
            res.end("Page not found!")
        }
        
        
        


// req.method GET POST PUT DELETE

    // const name = "Ahmed";
    // res.writeHead(200, {"Content-Type": "text/html"});
    // let html = fs.readFileSync('./index.html', "utf-8");
    // html = html.replace("{{name}}", name);
    // res.end(html);
 
});




server.listen(4700, () => {
    console.log("Server running on port 4700");
});