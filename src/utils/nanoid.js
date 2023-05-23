import { nanoid } from 'nanoid';
import fs from 'fs';
import path from 'path';
import process from 'process';

function generateIds() {
    const ids = [];
    for (let i = 0; i < 3; i++) {
        ids.push(nanoid(10)); // Set the size option to 10
    }
    return ids;
}

const ids = generateIds();
const filePath = path.join(process.cwd(), 'ids.txt');
fs.writeFileSync(filePath, ids.join('\n'));

console.log(ids); // Example output: [ 'yZzJ5nJ9', '8vZt7Jz_', 'JzJzJzJz' ]