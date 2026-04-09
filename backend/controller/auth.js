export const signup = async(req, res) => {
    console.log(req.body);
    res.json( { messaage : "signup success"})
}
export const login = async(req, res) => {
    console.log(req.body);
    res.json( { messaage : "login success"})
}
