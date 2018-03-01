import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";

@Entity('news')
export class News { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    news_id: string;

    @Column()
    title: string;

    @Column()
    title_ru: string;

    @Column()
    short: string;

    @Column()
    short_ru: string;

    @Column()
    full: string;

    @Column()
    full_ru: string;

    @Column()
    auth: string;

    @Column()
    auth_ru: string;

    @Column()
    date: string;




}
