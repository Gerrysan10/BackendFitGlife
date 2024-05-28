import app from './app.js'
import { connectDB } from './db.js'

connectDB().catch(console.dir);
app.listen(4000)
console.log('server on port', 4000)