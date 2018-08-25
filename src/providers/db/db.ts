import { Injectable } from '@angular/core';
import { getRepository, Repository } from 'typeorm';
import { Table } from './../../enteties/timetable';

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
            'Table.room'
          ])
          .orderBy("Table.pair", "ASC")
          .where('Day_id = :Day_id',{Day_id: day})
          .getMany()
    
  } 
}
