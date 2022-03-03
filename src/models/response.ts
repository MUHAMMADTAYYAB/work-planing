

export class Response
{
    responseData:any = null;
    responseCode:number = 0;

    constructor(data:any, code:number)
    {
        this.responseData = data;
        this.responseCode = code;
    }

    compose() {
        console.log(this.responseCode + '-' + this.responseData);
        return this;
    }

    validate()
    {
        if(this.responseData.result && this.responseCode==200 && this.responseData.result!="")
            return true;
        return false;
    }

    validateResponse()
    {
        if(this.responseData && this.responseCode==200 && this.responseData!="")
            return true;
        return false;
    }


}