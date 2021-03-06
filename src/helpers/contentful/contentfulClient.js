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
        const allPets = await this.client.getEntries({
            content_type: 'pet',
        });
        return allPets;
    }

    async getPetBySlug(slug) {
        const petList = await this.getFilteredPetsList({ 'fields.slug': slug });
        return petList.items[0];
    }

    async getFilteredPetsList(searchParam) {
        const newPetsList = await this.client.getEntries({
            content_type: 'pet',
            ...searchParam,
        });
        return newPetsList;
    }
}

export default new ContentfulClient();
