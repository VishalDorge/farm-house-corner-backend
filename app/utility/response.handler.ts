
export class ResponseHandler {
    constructor(public data: any, public error: any = null){}
}

export class ResponseType {
    constructor(public message: string, public statusCode: number){}
}