import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('Table')
export class Table { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    room: string;

    @Column("boolean", {nullable:true})
    isEven: boolean;

    @Column()
    type: number;

    @Column()
    pair: number;

    @Column()
    TeachNameUz: string;
    
    @Column()
    TeachNameRu: string;
    
    @Column()
    SubNameUz: string;

    @Column()
    SubNameRu: string;

    @Column()
    Day_id: number;
    
    @Column()
    GroupName: string;

}
