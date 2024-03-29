'use strict';
import { AppRoute } from "../lib/AppRoute";
import { UploadDirectory } from "../config/setting.config";
import { UserClass } from "../include/user.class";




var uploaddir = new UploadDirectory();
// var upload = multer({ dest: uploaddir.UPLOADSDIR });
// var type = upload.single('file');


module.exports = function (app: any) {

  /* User Register*/
  const user = new UserClass();
  app.post("/register", user.registration)


  


  var obj = new AppRoute();
  app.get("/[a-z]{1,20}", obj.getMethod);
  app.post("/[a-z]{1,20}", obj.postMethod);
  app.put("/[a-z]{1,20}", obj.putMethod);
  app.delete("/[a-z]{1,20}", obj.deleteMethod);
  app.patch("/[a-z]{1,20}", obj.patchMethod);


}