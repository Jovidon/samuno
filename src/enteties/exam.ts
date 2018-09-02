import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('Exam')
export class Exam { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    room: string;

    @Column()
    TeachNameUz: string;
    
    @Column()
    TeachNameRu: string;
    
    @Column()
    SubNameUz: string;

    @Column()
    SubNameRu: string;
    
    @Column()
    GroupName: string;

    @Column() 
    examNameUz: string;

    @Column() 
    examNameRu: string;

    @Column() 
    date: string;
}
