import { Injectable } from '@angular/core';
import { getRepository, Repository } from 'typeorm';
import { Table } from './../../enteties/timetable';
import { Badges } from './../../enteties/badges';
import { Exam } from './../../enteties/exam';

@Injectable()
export class DbProvider {

  constructor() {}

   async getTableFromBase(): Promise<any> {
    const tableRepo = getRepository('Table') as Repository<Table>;
    return await tableRepo.find();
  }

  async synchronizeTabe(table) {
    const tableRepo = getRepository('Table') as Repository<Table>;
    if(table.length){
      this.getTableFromBase().then(async (res) =>{
        if(res.length > 0)  
          await tableRepo.clear();
      });
      for(let item of table)
        {
          await tableRepo.save(item);
        }
    }
  }

  async synchExam(exam) {
    const examRepo = getRepository('Exam') as Repository<Exam>;

    let ex = await examRepo.find();

    if(exam.length) {
      if(ex)
        await examRepo.clear();
    }
    
    for(let item of exam) {
      await examRepo.save(item);
    }
  }

  async getTableWithDay(day: number): Promise<any> {

    const tableRepo = getRepository('Table') as Repository<Table>;
      return await tableRepo.createQueryBuilder('Table')
          .select([
            'Table.SubNameUz',
            'Table.TeachNameUz',
            'Table.SubNameRu',
            'Table.TeachNameRu',
            'Table.type',
            'Table.pair',
            'Table.GroupName',
            'Table.isEven',
            'Table.room',
            'Table.Teacher_id',
            'Table.Group_id'
          ])
          .orderBy("Table.pair", "ASC")
          .where('Day_id = :Day_id',{Day_id: day})
          .getMany()
    
  }

  async getExam(): Promise<any> {
    const examRepo = getRepository('Exam') as Repository<Exam>;
    return await examRepo.createQueryBuilder('Exam')
      .select([
        'Exam.SubNameUz',
        'Exam.TeachNameUz',
        'Exam.SubNameRu',
        'Exam.TeachNameRu',
        'Exam.GroupName',
        'Exam.examNameUz',
        'Exam.examNameRu',
        'Exam.room',
        'Exam.date'
      ])
      .getMany()
  }
  
  async updateBadgeCount(id, which) { 
    const badgeRepo = getRepository('Badges') as Repository<Badges>;
    // if which equals to 1 means news
    // if which equals to 2 means announcement
    let badge = await badgeRepo.findOne();
    if(badge) {
      if(which == 1) {
        badge.News_id = id;
        return await badgeRepo.save(badge);
      }
      else
      {
        badge.Announts_id = id;
        return await badgeRepo.save(badge);
      }
    }
    else {
      badge = new Badges();
      if(which == 1) {
        badge.News_id = id;
        return await badgeRepo.save(badge);
      }
      else {
        badge.Announts_id = id;
        return await badgeRepo.save(badge);
      }
    }
  }

  async getBadgeCount() {
    const badgeRepo = getRepository('Badges') as Repository<Badges>;
    let badge = await badgeRepo.findOne();
    if(badge) {
      return badge;
    }
    else {
      return 0;
    }
  }
}
