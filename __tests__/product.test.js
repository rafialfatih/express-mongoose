import request from 'supertest'
import app from '#/'

import {connectDB, dropDB, dropCollection} from '#/config/dbtest.config'
import { response } from 'express'

beforeAll(async () => {
  await connectDB()
})

afterAll(async () => {
  await dropDB()
})

afterEach(async () => {
  await dropCollection()
})

describe("Products", () => {
    describe("GET Request /", () => {
        test('It should be response the GET method.', async () => {
            await request(app).get('/api/products')
            expect(response.statusCode).toBe(200)
        })
    })
})
