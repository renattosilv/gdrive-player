import { Router } from "express";
import { GoogleDrive } from "../data/GoogleDrive";

const routes = Router()

routes.get('/', async (request, response) => {
    return response.send(JSON.stringify({
        client_email: "files-drive009-rps@drive009.iam.gserviceaccount.com",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjDjVd8mIrDbSi\npp2ttMxM1v003/e435mw6tZK2mxQPzFLw8IFSeBjNaS/UutetTiVtEN3srbikqtJ\nuXUdhCego+LyOIxfF9wuY5hT9YHwyVwUpKN6VabEjBhVZV5ZoWwGgdKg9Jx6f/bg\nzTLKtVI4OEheW6z5rCQz3gTCCm4rnNFpFtBArjlseT2wnKyf0FIKyIEqxUy4XheU\nUsO6h3B0WH2T3aXgyKYVHjfPmNf1gz3JtP+vVLozfFFtQMImXfVu5pzBJSgktBrx\nYLZaD8zSmgIubJXoMQWK9sKLyO+1AZsLCKg1Y4Pw+YxjFGjfDNZ8zp6ofdmzSWna\nafob+rVTAgMBAAECggEAIIRNXTpgnGBj1QnwKPuEwJAhN8GwZ7RjtHXonU3YytoH\nTSoxT5evgWlpvOPe32i5a5Vi3QSNVzrToOS0t9mqg20bbZ2cVLxv4upmrtunearW\nS6GXnmZlVw3vLlyER9Cat+N86y9M41sQkz0os2ccieyjdfnHUZUkNRnCDiZBWT3f\nwJLdQaWA97wxd2vkYc84uIlYW6DclVXB1SuT2ZhygJHc+yEQNfzMZNgOJI/ky/ds\nua/kRRjTp+A/24dFhoTrYFE1h+n8/ygTnFjeO1+ywiYuHjofpDUWoOLbRMnkSoq9\nnnNBNEm2fHBlyZpygTdOxXYPLEFAxUCbYl34zHuxWQKBgQDOvHWVHWGZ/VTxUNPi\nVimCbVTgquneri14gsoHNsuKRSC5ZcwY3wRqAKGOvlUUHkuVj30vNVV6D3ZPlPQ8\nZPtIR0JLgo2mtipJ7OhkWgcBHt4/p8O4YYVbU1T3pgUBU20SqDaw4opQaInLmJUX\nCmyfFFsEVx6TmxGrQZtDcn5GmwKBgQDJ6RgrkMdvSv/hjQ3Umz3esUNigVdsyEfj\nXK8FGlFKsqS2JUXaUXBaaJtau//MgEsLi0nshrUgTA/2gg/g1P5j1Xhip8vf8GcS\nmSPlcOO+QhjkxFYSOFDSJakih5DETu6kboQ1zCLsclWPXxqRmsSNOcwYzvCaelMY\njay8UF9bqQKBgC37qyekpl3rBCa8tLRGN+tjyBpEycoW8dQ5OxiJrpItuA6kvtXV\nXRT62PR4D1JvPp6gkNacRUvl/onK9twsFdxIxU0oV7t6D0PsJvCTObWdGRANj7IG\nNvROP7rpuXlHBh69PZTwfpVN+0BGyvqZ/fkQPQJlIk7wkeiGqjNBVyb7AoGAIyGO\nlg3z1XZ8PTd4v5RfWH8JVXthxci3UWUQAthIarHYnOSxWcIvxVtMJKZvZJqx9AlB\nTIlHvJ3fbSnGL31/4ckD0E6X15gRpxfEOijBR5pikHNk8nif/2CUJDDoTG/bb/rW\nwDGLpg5iurZ2ff0q09PJoktna8l66dvEwWNOpDkCgYEAln0Yf+udT43Waax8qkb8\n+JgrzupGrn//bCtd9dx3hr/ijxmISjvCuoxx7UgfOVZZPDsU5uQn1EL/qerOfL16\nMGZD9WlJBIu0VwNu+7DHsCs8UF6pUGCruuGARGii31d7O3MMhPzwAxGhcJirYPYk\nAWoItXe0A5lwQclHvTqI++w=\n-----END PRIVATE KEY-----\n",
    }))
})

export { routes }