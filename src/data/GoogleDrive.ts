import type { GoogleAuth } from 'google-auth-library'
import type { JSONClient } from 'google-auth-library/build/src/auth/googleauth'
import { google } from 'googleapis'

interface Credentials {
    client_email: string;
    private_key: string;
}

class GoogleDrive {
    private credentials: Credentials;
    private auth?: GoogleAuth<JSONClient>

    constructor(credentials: Credentials){
        this.credentials = credentials
        
        this.auth = new google.auth.GoogleAuth({
            credentials: this.credentials,
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });
    }

    async list(){
        const drive = google.drive({ version: 'v3', auth: this.auth });

        const response = await drive.files.list({
            q: "mimeType='audio/mpeg'", 
            fields: 'files(name, id)',
        });

        return response.data.files
    }

}


export { GoogleDrive }