import {HTTP} from "../utils/swagger"



export async function send_udata_f_signup (user_data) {
    try {
        const response = await HTTP.post("auth/signup/", user_data)
        console.log('sendOTP response ===>>> ', response)
        return response.data
    } catch (e) {
        console.log('sendOTP error ===>>> ', e)
        console.log("hello")
        throw e
    }
}