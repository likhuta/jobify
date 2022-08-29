import { readFile } from 'fs/promises'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import Job from './models/Job.js'

dotenv.config()

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await Job.deleteMany()

    const jsonMockData = JSON.parse(
      await readFile(new URL('./mock-data.json', import.meta.url))
    )
    await Job.create(jsonMockData)
    console.log('Success!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }

}

start()

// node populate - launch this file