import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";

@Entity('timetable')
export class TimeTable { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fan: string;
    
    @Column()
    teacher: string;
    
    @Column()
    day: string;

    @Column()
    type: string;

    @Column()
    lessonId: string;







}
