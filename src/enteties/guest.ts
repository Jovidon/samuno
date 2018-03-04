import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('guest')
export class Guest { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;





}
