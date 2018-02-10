import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";

@Entity('languagerepository')
export class LanguageRepository { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;





}
