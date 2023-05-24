//This file will be used to generate some random colors
import randomColor from "randomcolor";
import path from 'path'
import { writeFileSync } from "fs";



let randomColorArray = []

for (let i = 0; i < 50; i++) {
    randomColorArray.push(randomColor())
}


const __dirname = path.dirname(new URL(import.meta.url).pathname);
const filePath = path.join(__dirname, 'randomColor.txt')

writeFileSync(filePath, randomColorArray.join('\n').split(',').join('\n'))