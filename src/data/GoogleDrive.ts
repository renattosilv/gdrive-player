import type { GoogleAuth } from 'google-auth-library'
import type { JSONClient } from 'google-auth-library/build/src/auth/googleauth'
import { google, drive_v3 } from 'googleapis'
import { createReadStream } from 'fs';

interface ICredentials {
    client_email: string;
    private_key: string;
}

class GoogleDrive {
    private credentials: ICredentials;
    private auth?: GoogleAuth<JSONClient>

    constructor(credentials: ICredentials){
        this.credentials = credentials
        this.authenticate()
    }
    
    private authenticate(){
        this.auth = new google.auth.GoogleAuth({
            credentials: this.credentials,
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });
    }

    async listFiles(){
        this.authenticate()

        const drive = google.drive({ version: 'v3', auth: this.auth });
        
        const response = await drive.files.list({
            q: "mimeType='audio/mpeg'", 
            fields: 'files(name, id)',
        });
        
        return response.data.files
    }
    
    async streamFile(id: string){
        const drive = google.drive({ version: 'v3', auth: this.auth });

        const mediaResponse = await drive.files.get(
            { fileId: id, alt: 'media' },
            { responseType: 'stream' }
        );

        const stream = mediaResponse.data;

        return stream
    }

}


export { GoogleDrive }