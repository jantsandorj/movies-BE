import {model,Schema,Types} from "mongoose"
interface ITheathers {
    theaterId: number;
    location: {
        address : {
            street : string;
            city: string;
            state: string;
            zipcode: string;
        };
        geo: {
            type: string;
            coordinates: number[]
        }
    }
}

const TheaterSchema = new Schema<ITheathers>({}, {timestamps: true})

const Theaters = model<ITheathers>("theaters", TheaterSchema)

export default Theaters;