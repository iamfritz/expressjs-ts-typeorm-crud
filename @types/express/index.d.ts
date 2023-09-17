import { Settings } from '../../src/database/entities/Settings';
import { Users } from '../../src/database/entities/Users';
import { Accounts } from '../../src/database/entities/Accounts';
import { Request } from 'express';

declare global {
    namespace Express {
        export interface Request {
            account: any;
            user: any;
            authenticated: boolean;
            jwt_decode: any;
            apiKey: string;
            apiUrl: string;
        }
    }
}
