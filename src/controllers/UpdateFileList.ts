import { GoogleDrive } from "@/data";
import { Request, Response } from "express";

async function UpdateFileList(request: Request, response: Response){
    const client_email = process.env.CLIENT_EMAIL as string
    const private_key = process.env.PRIVATE_KEY as string
    /*const googledrive = new GoogleDrive({
    })*/

    //const list = await googledrive.listFiles()
    console.log(client_email)
    console.log(private_key)

    return response.json({})
}

export { UpdateFileList }