import { Request, Response, NextFunction } from "express";
import { SessionManagment } from "../lib/model/Session";
import { ModelRawQuery } from "../lib/model/RawQuery";
import { ModelRawNonQuery } from "../lib/model/RawNonQuery";
import { RawView } from "../lib/view/RawView";
import { Res406 } from "../lib/view/406";
import md5 from "md5";

export class UserClass {

    /*Register API */
    public registration(req: Request, res: Response, next: NextFunction) {
        console.log("Data:::", req.body)
        let rdata = req.body;
        let password = md5(rdata.password)
        let obj = new ModelRawQuery(req, res)
        obj.qrysql = "SELECT username, email FROM users WHERE username='" + rdata.username + "' OR email='" + rdata.email + "'";
        obj.prepare();
        obj.execute((error: any, result: any) => {
            if (result.length > 0) {
                if (rdata.username == result[0].username) {
                    res.send({ error: 0, message: "Username Already Exist!" })
                } else {
                    res.send({ error: 0, message: "Email Already Exist!" })
                }
            } else {
                let obj = new ModelRawNonQuery(req, res);
                obj.nonqrysql = "INSERT INTO `users` SET `username`='" + rdata.username + "', `password`='" + rdata.password + "',  `email`='" + rdata.email + "', `type`='" + rdata.type + "'";
                obj.prepare();
                obj.execute((error: any, result: any) => {
                    if (result.length > 0) {
                        res.send({ error: 0, message: "Register Successfully" })
                    }
                })
            }
        })


    }

}