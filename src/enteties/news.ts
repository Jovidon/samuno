import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('news')
export class News { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_news: number;
}
