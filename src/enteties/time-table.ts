import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";

@Entity('timetable')
export class TimeTable { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    day: string;
    
    @Column()
    fan: string;
    
    @Column()
    teacher: string;
    
    @Column()
    room: string;
    
    @Column()
    type: string;
    
    @Column()
    pair: string;








}
