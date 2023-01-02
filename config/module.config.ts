'use strict';
import { SessionManagment, CurrentSession } from '../lib/model/Session';
import { truncate } from 'fs';
const HashMap = require("hashmap");

export class DataFields {
    public field: string = "";
    public value?: string = "";
    public type?: boolean = false;
}

export class Module {
    public path: string = "";
    public table?: string = "";
    public fields?: string[] = [];
    public sqlqry?: string = "";
    public filter?: any;
    public group?: string = "";
    public order?: string = "";
    public limit?: number = -1;
    public type?: string = "";
    public session?: any;
    public keyfield?: any;
    public label?: string = "";
    public value?: string = "";
    public where?: boolean = false;
    public storedProcedure?: string = "";
}

export class Login {
    public postfield: DataFields[] = [];
    public tablefield: string[] = [];
    public selectfield: string[] = [];
    public md5: boolean = false;
    public table: string = "";
    public filter?: any;
}

export class Session {
    public session: string = "";
    public field: string[] = [];
    public table: string = "";
    public filter?: any;
}

export class modData {
    private _status: boolean = false;
    public data: Module[] = [

        /**
         * User Management
         */

        // { table: "users", fields: ["id", "package_id", "username", "firstname", "lastname", "email", "password", "company", "contact", "channels"], path: "/usermanagement", type: "main" },

        // { sqlqry: "SELECT id, username, password, type, company, contact, firstname, lastname, email, term_condition, balance, description, payment_type, package_id, channels  FROM `users` WHERE type=2 AND ", path: "/usermanagement", session: { "idparent": "id" }, where: false, type: "getuser", order: "id ASC" },

        /*agent management*/
        // { sqlqry: "SELECT * FROM `agents` WHERE ", path: "/getagentdata", type: "getagentdata" },

        




    ];

    public get status(): boolean {
        return this._status;
    }

    public Search(path: string): Module[] {
        this._status = false;
        let ret: Module[] = [];
        this.data.forEach(element => {
            if (element.path == path) {
                ret.push(element);
                this._status = true;
            }
        });
        return ret;
    }

    public Type(type: string, row: Module[]): Module {
        this._status = false;
        let ret: Module = new Module();
        row.forEach(element => {
            if (element.type == type) {
                ret = element;
                this._status = true;
            }
        });
        return ret;
    }
}



export class modLogin {
    public data: Login = { table: "users", postfield: [{ field: "username", type: true }, { field: "password", type: true }], tablefield: ["username", "password"], selectfield: ["id", "username", "type", "email", "company", "balance"], md5: false };

}



export class modSession {
    public data: Session = { table: "session", session: "authkey", field: ["id", "username", "type", "email"] };
}





export const sessiondata = new HashMap();
export const cursess = new CurrentSession();
export const getMod = new modData();