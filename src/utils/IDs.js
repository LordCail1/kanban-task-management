import { nanoid } from "nanoid";
import fs from 'fs'

const idArray = []

for (let i = 0; i < 100; i++) {
    idArray.push(`id: '${nanoid(10)}',`)
}

const data = idArray.join('\n')

fs.writeFile('./IDs.txt', data, (err) => {
    if (err) throw err;
    console.log('IDs saved to file!')
})


console.log(idArray)

