import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('teacher')
export class Teacher { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;
    
    @Column()
    cafedra: string;






}
