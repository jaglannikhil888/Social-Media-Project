const {Posts,Users} = require('../db/models')

async function createNewPost(userId,title,body){
    const post=await Posts.create({
        title,
        body,
        userId,  
    })

    return post
}

/**
 * So we can either do showAllPosts by username or through title
 * showAllPosts({username:''})
 * showAllPosts({title:''})
*/
async function findAllPosts(query){
    // TODO: Handle query params here
    const posts=await Posts.findAll({
        // since there is reltn btwn posts and users 
        // we can include users here
        include:[Users]
    })
    
    return posts
}

module.exports={
    createNewPost,
    findAllPosts,
}

async function task(){
    /*console.log(
        await createNewPost(
        1,
        'This is a sample post',
        'Body of the post goes here'
        )
    ),
    console.log(
        await createNewPost(
            2,
            'Another sample post',
            'Some body example here as well'            
        )
    )*/

    const posts=await findAllPosts()
    for(let p of posts){
        console.log(`${p.title}\nauthor: ${p.user.username} \n${p.body}\n========\n`)
    }
}

task()