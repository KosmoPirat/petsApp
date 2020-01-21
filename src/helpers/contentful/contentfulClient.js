import * as contentful from 'contentful';

class ContentfulClient {
    constructor() {
        if (!this.client) {
            this.client = contentful.createClient({
                space: 'dwccqqzx8ful',
                accessToken: '5xj8e6x3YDyJJMJnMTEu7yWdLSI7JX35QqUX8iOSX74',
            });
        }
    }

    async getAllPets() {
        const allPets = await this.client.getEntries();
        return allPets;
    }
}

export default new ContentfulClient();
