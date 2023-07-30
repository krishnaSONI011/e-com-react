import bcrypt from 'bcrypt'

export  let hashpass = async (password)=>{
    try {
        let salt = 10
        let hashed = await bcrypt.hash(password,salt)
        return hashed
    } catch (error) {
        
    }
}

export let comparePass = async (password,hashpassred)=>{
    return bcrypt.compare(password,hashpassred)
}