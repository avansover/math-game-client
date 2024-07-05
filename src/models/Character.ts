import { ObjectId } from "mongodb"

export type HeroClass = {
    _id: ObjectId
    name: string
}

export type Character = {
    Id: number
    Name: string
    level: number
    Experience: number
    ClassId: number
} 