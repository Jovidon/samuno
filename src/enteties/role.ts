import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('role')
export class Role { 
    
    @Column()
    role: number;





}
