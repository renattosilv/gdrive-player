import { Router } from "express";
import { UpdateFileList } from "@/controllers/UpdateFileList";

const routes = Router()

routes.get('/list', (request, response) => {
    const client_email = process.env.CLIENT_EMAIL as string
    const private_key = process.env.PRIVATE_KEY as string
    /*const googledrive = new GoogleDrive({
    })*/

    //const list = await googledrive.listFiles()
    console.log(client_email)
    console.log(private_key)

    return response.json({})
})

export { routes }