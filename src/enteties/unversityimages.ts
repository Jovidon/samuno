import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('UniversityImages')
export class UniversityImages { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column("blob",{ 
        nullable:false,
        name:"image"
        })
    image:Buffer;




}
