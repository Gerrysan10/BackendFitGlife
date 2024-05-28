import {z} from 'zod'

export const registerScheme = z.object({
    username: z.string({
        required_error:'username is required'
    }),
    phone: z.string({
        required_error:'phone is required'
    }),
    email: z.string({
        required_error:'email is required'
    }).email(({
        message:'email is not valid'
    })),
    password: z.string({
        required_error:'password is required'
    }).min(6, {
        message: 'La contraseña debe tener un mínimo de 6 caracteres'
    })
})