import express from "express"
import fs from "fs"

const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    fs.appendFileSync('logger.txt', `TimeStamp: ${new Date()} HTTPMethod: ${req.method} URL: ${req.url}\n`)
    console.log(`TimeStamp: ${new Date()} HTTPMethod: ${req.method} URL: ${req.url}`)
    next()
}


export default logger