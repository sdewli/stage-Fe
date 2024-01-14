import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://dev-api.stage.in/'
})

export const getCaraouselData = async()=>{
    try{
        const response = await axiosInstance.get('/v23/assignment/carousel-data')
        return{
            success:true,
            data:response.data.data
        }
    }catch(error:any){
        return{
            success:true,
            data:error
        }
    }
}

export const getRowData = async()=>{
    try{
        const response = await axiosInstance.get('/v23/assignment/row-data')
        return{
            success:true,
            data:response.data.data
        }
    }catch(error:any){
        return{
            success:true,
            data:error
        }
    }
}
export const getVideoData = async()=>{
    try{
        const response = await axiosInstance.get('/v23/assignment/video-hls-url')
        return{
            success:true,
            data:response.data.data
        }
       
    }catch(error:any){
        return{
            success:true,
            data:error
        }
    }
}