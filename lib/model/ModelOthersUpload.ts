import { Request, Response, NextFunction } from "express";
import { ModelObject } from "./ModelObject";
import { Exec } from "./ExecExecute";
import { UploadDirectory } from "../../config/setting.config";

var fs = require('fs');
const d: Date = new Date();
export class ModelOtherUpload extends ModelObject {
	constructor(req: Request, res: Response) {
		super(req, res);
		this.type = "INSERT";
	}


	/**
	 * To upload the normal files
	 */
	public fileUpload() {
		console.log(this.req.file);
		var uploaddir = new UploadDirectory();
		var fullname = this.req.file.originalname.split(".");
		var finelfile = fullname[0] + "_" + (new Date().getTime()) + '.' + fullname[1];
		var target_path = uploaddir.UPLOADSDIR + finelfile;
		var tmp_path = this.req.file.path;
		var src = fs.createReadStream(tmp_path);
		var dest = fs.createWriteStream(target_path);
		src.pipe(dest);
		var data = [finelfile, uploaddir.UPLOADSDIR, tmp_path];
		return data;
	}


	/**
	 * To upload the audio files
	 */
	public AudioUpload() {
		console.log(this.req.file);
		var uploaddir = new UploadDirectory();
		var fullname = this.req.file.originalname.split(".");
		var finelfile = fullname[0] + "_" + (new Date().getTime()) + '.' + fullname[1];
		var target_path = uploaddir.AUDIOPATH + finelfile;
		var tmp_path = this.req.file.path;
		var src = fs.createReadStream(tmp_path);
		var dest = fs.createWriteStream(target_path);
		src.pipe(dest);
		var data = [finelfile, uploaddir.AUDIOPATH, tmp_path];
		return data;
	}
	

	public AvatarUpload() {
		console.log(this.req.file);
		var uploaddir = new UploadDirectory();
		var fullname = this.req.file.originalname.split(".");
		var finelfile = fullname[0] + "_" + (new Date().getTime()) + '.' + fullname[1];
		var target_path = uploaddir.AVTARPATH + finelfile;
		var tmp_path = this.req.file.path;
		var src = fs.createReadStream(tmp_path);
		var dest = fs.createWriteStream(target_path);
		src.pipe(dest);
		var data = [finelfile, uploaddir.AVTARPATH, tmp_path];
		return data;
	}

	public prepare(): boolean {
		return true;
	}

	public execute(callback: (error: any, data: any) => void) { }
}