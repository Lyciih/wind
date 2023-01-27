const { Sequelize } = require('sequelize')
const {Op} = require('sequelize')
const sequelize = new Sequelize('水岸青新版','admin','1718',{host: 'localhost',dialect: 'mariadb'})
const sequelizewind = new Sequelize('建功嶼年風力數據','admin','1718',{host: 'localhost',dialect: 'mariadb'})

try{
sequelize.authenticate()
	console.log('mariadb ok')
}
catch(error){
console.error('oh no',error)
}

const data = require('./models/item.js')(sequelize,Sequelize)

var test = null
data.findAll({where: {目標日期: {[Op.ne]: '0000-00-00'}},order: [['目標日期','ASC']] }).then(item => {
	test = JSON.stringify(item,null,4)
})


try{
sequelizewind.authenticate()
	console.log('mariadb ok')
}
catch(error){
console.error('oh no',error)
}

const datawind = require('./models/月.js')(sequelizewind,Sequelize)

var testwind = null
datawind.findAll().then(asd => {
	testwind = JSON.stringify(asd,null,4)
})



var n = 0

var fs = require("fs")
var https = require("https")

const options = {
	ca: fs.readFileSync('./lyciih_blogsyte_com.pem-chain')
}




const express = require("express")
const app = express()

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.get("/", (reg, res) => {
	n = n+1
	console.log("someone come in", n)
	res.render("index",{testwind})
})


app.get("/gl", (reg, res) => {
	n = n+1
	console.log("someone come in", n)
	res.render("gl")
})


app.get("/company", (reg, res) => {
	n = n+1
	console.log("someone come in", n)
	res.render("company",{test})
})

app.listen(3000)
