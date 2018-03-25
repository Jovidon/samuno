import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('languagerepository')
export class LanguageRepository { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;





}
