import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('teachertimetable')
export class TeacherTimeTable { 
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fan: string;

    @Column()
    fan1 : string;
    
    @Column()
    group: string;
    
    @Column()
    day: string;

    @Column()
    type: string;

    @Column()
    type1 : string;
    
    @Column()
    lessonId: string;

    @Column()
    room: string;

    @Column()
    room1 : string;

  



}
