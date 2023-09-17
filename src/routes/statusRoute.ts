import express, { Request, Response } from 'express';
//import { authenticate } from '../middleware/authenticator';
const router = express.Router()
const packagejson = require('../../package.json');

router.get('/', async (req: Request, res: Response) => {
    let status = {
        version: packagejson.version,
        framework_version: packagejson.framework_version,
        status: "online",
        authenticated: req.authenticated,
    }
    res.send(status)
})

module.exports = router
