import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('notice')
export class Notice { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    note_id: string;
}
