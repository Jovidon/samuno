import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('user')
export class User { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    surname: string;
    
    @Column()
    idFaculty: number;

    @Column()
    idGroup : number;
    


}
