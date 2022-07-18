async function authenticate(req, res){
    try {
        const auth =  req.headers ? req.headers.authorization : '{}'
        const token =  JSON.parse(auth)
        console.log(token)
        let user = await find({
            attributes: ['id', 'username', 'isAdmin', 'firstname', 'lastname', 'address', 'phone', 'email'],
            table: 'user',
            where: `id = ${token.user_id} AND privateKey = ${token.pk}`
        })
        if (!user.length){ // không tìm thấy user nào
            return 0
        }
        req.user = user[0]
        return 1;
        
    } catch (error) {
        return 0
    }
}
module.exports = {
    authenticate
}