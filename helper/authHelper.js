import bcrypt from 'bcrypt'

export const hashPassword = async (password)=>{
    try{
        const salRounds = bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hashSync(password,salRounds)
        return hashedPassword
    }catch(error){
        console.log(error)
    }
}

export const comparePassword = async (password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}