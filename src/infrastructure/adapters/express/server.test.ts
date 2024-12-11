import request from 'supertest';
import { app } from './server'; // Asegúrate de que 'app' sea la instancia de tu aplicación Express

describe('Express Server', () => {
    it('should shorten a URL', async () => {
        const response = await request(app)
            .post('/shorten')
            .send({ url: 'http://example.com' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('shortUrl');
    });

    it('should redirect to the original URL', async () => {
        const shortUrl = 'abc123'; // Assume this is a valid short URL in your system
        const response = await request(app).get(`/${shortUrl}`);

        expect(response.status).toBe(302);
        expect(response.header.location).toBe('http://example.com'); // Replace with the expected original URL
    });

    it('should return 404 for an invalid short URL', async () => {
        const response = await request(app).get('/invalidShortUrl');

        expect(response.status).toBe(404);
    });
});