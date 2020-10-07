const express=require('express')

/*const models=require('./db/models')
const db=models.db*/

// This above line can alos be done like
const {db}=require('./db/models') 
// this means from the reuire model we need only db

const {usersRoute}=require('./routes/users')
const {postsRoute}=require('./routes/posts')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users',usersRoute)
app.use('/api/posts',postsRoute)
app.use('/',express.static(__dirname+'/public'))

/*app.listen(8383,()=>{
    console.log('server started on http://localhost:8383')
})*/

// So we will do ablove thing in following way
// we will do it in form of promises

// we did force true so that this table 
// get's destroyed and is created fresh
db.sync({force:true})
.then(()=>{
    app.listen(8383,()=>{
        console.log('server started on http://localhost:8383')
    })
}).catch((err)=>{
    console.error(new Error('Could not start database'))
    console.error(err)
})