import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('timetable')
export class TimeTable { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fan: string;

    @Column()
    fan1: string;
    
    @Column()
    teacher: string;
   
    @Column()
    teacher1: string;
    
    @Column()
    day: string;

    @Column()
    type: string;

    @Column()
    type1:string;

    @Column()
    lessonId: string;

    @Column()
    room: string;

    @Column()
    room1:string;









}
