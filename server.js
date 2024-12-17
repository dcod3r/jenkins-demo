const express = required('express')

const app = express()

app.get('/', (request,response)=>{
	response.send('Hello World, I am Dcoder);
})

app.listen(4000, '0.0.0.0.', ()=>{
	console.log('server started at port 4000')
})
