const { Sequelize } = require('sequelize')
const {Op} = require('sequelize')
const sequelize2 = new Sequelize('建功嶼年風力數據','admin','1718',{host: 'localhost',dialect: 'mariadb'})

try{
sequelize.authenticate()
	console.log('mariadb ok')
}
catch(error){
	console.error('oh no',error)
}

const data = require('./models/月.js')(sequelize,Sequelize)

var test = data.findAll()

document.getElementById('abc').innerHTML = sdfffv

const { createApp } = Vue
createApp({
	data() {
		return {
			message: 'Hello Vue!',
			test
		}
	}
}).mount('#left')

