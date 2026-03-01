import {Image} from '@/resources/image/imageResource'

class ImageService{
    baseURL: string = `${process.env.NEXT_PUBLIC_API_URL}/v1/images`;
    
    async buscar(query: string, extension: string) : Promise<Image[]>{
        const url = `${this.baseURL}?query=${query}&extension=${extension}`
        const response = await fetch(url);
        return await response.json();
    }

}

export const useImageService = () => new ImageService();