import bcrypt from 'bcrypt';

class CryptPassword {
    async encrypt(password: string){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        return hash;
    }

    async compare(password: string, userPassword: string){
        const match = await bcrypt.compare(password, userPassword);
 
        if (match) {
            return  true;
        }

        return false; 
    }
}

export default CryptPassword;