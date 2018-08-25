import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('Badges')
export class Badges { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int", {nullable:true})
    News_id: number;

    @Column("int", {nullable:true})
    Announts_id: number;

    @Column("int", {nullable:true})
    Post_id: number;


}
