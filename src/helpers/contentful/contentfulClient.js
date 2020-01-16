import * as contentful from 'contentful';

class ContentfulClient {
  static client;

  constructor() {
    ContentfulClient.client = contentful.createClient({
      space: '6078e7py7ypq',
      accessToken: 'uotkhjCYgWAIuR621OO8MXfNKjo7F7E7Tq2KEvvY2vY',
    });
  }

  async getAllPets() {
    return await ContentfulClient.client.getEntries();
  }
}

export default new ContentfulClient();
