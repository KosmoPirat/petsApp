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

    async getPetBySlug(slug) {
        const specificPet = await this.client.getEntries({
            content_type: 'pet',
            'fields.slug': slug,
        });
        return specificPet.items[0];
    }
}

export default new ContentfulClient();
