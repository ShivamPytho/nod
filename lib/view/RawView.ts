import { UserInterface } from "./UserInterface";

export class RawView extends UserInterface
{	
	public prepare(result:any)
	{
		//console.log(result);
		if(result==null || result.length < 1)
			this._status=false;
		else{
			this._status=true;
			this._data=result;
		}
	}

	public execute()
	{		
		if(this._status)
			this.response.status(200).send(this._data);
		else
			this.response.status(404).send({message:"404"});
	}
}