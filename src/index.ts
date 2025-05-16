import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.get('/test', async (req, res) => {
	const djs = await prisma.dJ.findMany() // Adjust model name as needed
	res.json(djs)
})

app.listen(5000, () => {
	console.log('Server is running on port 5000')
})
