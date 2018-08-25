import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('user')
export class User { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role: number;

    @Column("int", {nullable:true})
    user_id: number;


}
