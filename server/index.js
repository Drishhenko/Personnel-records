import dotenv  from "dotenv"
import express from 'express'
import cors from 'cors'
import sequelize from './database.js'
import router from './routes/routes.js'


dotenv.config()

const PORT = process.env.PORT
const  app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
	} catch (e) {} 
}

start()
