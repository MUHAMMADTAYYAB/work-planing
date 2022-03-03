import documentClient from "../../databases/connection"

export const  getItem= (params:any) => {
    return documentClient.scan(params)
};

export const  getSingleItem= (params:any) => {
    return documentClient.get(params)
};

export const  addItem= (params:any) => {
    return documentClient.put(params)
};

export const  updateItem= (params:any) => {
    return documentClient.update(params)
};


export const  deleteItem= (params:any) => {
    return documentClient.delete(params)
};


export const  addItems= (params:any) => {
    return documentClient.batchWrite(params)
};

export const  getItems= (params:any) => {
    return documentClient.batchGet(params)
};