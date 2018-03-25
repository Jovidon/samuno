import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

    @Column()
    room: string;







}
