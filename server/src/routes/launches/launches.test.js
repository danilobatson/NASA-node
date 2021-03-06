const request = require('supertest')
const { mongoConnect, mongoDisconnect} = require('../../services/mongo')
const app = require('../../app')

describe('Launches API',  () => {
  beforeAll(async() => {
    await mongoConnect()
  })

  afterAll(async () => {
    await mongoDisconnect()
  })

  describe('TEST GET /launches', () => {
    test('It should respond with a 200 success', async () => {
      const response = await request(app)
        .get('/v1/launches')
        .expect('Content-Type', /json/)
        .expect(200)
    })
  })

  describe('TEST POST /launches', () => {
    const completeLaunchData = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-62 f',
      launchDate: 'January 4, 2028'
    }

    const launchDataWithoutDate = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-62 f',
    }

    const launchDataWithInvalidDate = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-62 f',
      launchDate: 'foo'
    }

    test('It should respond with 201 created', async () => {
      const response = await request(app).post('/v1/launches')
        .send(completeLaunchData)
        .expect('Content-Type', /json/)
        .expect(201)
      const requestDate = new Date(completeLaunchData.launchDate).valueOf
      const responseDate = new Date(response.body.launchDate).valueOf
      expect(responseDate).toBe(requestDate)
      expect(response.body).toMatchObject(launchDataWithoutDate)
    })
  })
})
