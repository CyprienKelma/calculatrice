import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Valide {

    @PrimaryGeneratedColumn({})
    id: number;

    @Column()
    timeTakenMs: number;
} 
