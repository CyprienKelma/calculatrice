import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Success {

    @PrimaryGeneratedColumn({})
    id: number;

    @Column()
    timeTakenMs: number;
} 
