import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        const uri = 'mongodb+srv://admin:gerry107@atlascluster.timbrtj.mongodb.net/FitGLife?retryWrites=true&w=majority';
        await mongoose.connect(uri);
        console.log('Conexión exitosa con MongoDB usando Mongoose');
    }catch(error){
        console.error('Error al conectar con MongoDB:', error);
    }
        
}

