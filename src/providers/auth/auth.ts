import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRepository, Repository } from 'typeorm';
import { User } from './../../enteties/user';
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
  }

  public static token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWVVeiI6IkFiZHVsbGF5ZXYgWSIsImZ1bGxOYW1lUnUiOiJBYmR1bGxheWV2IFkiLCJiaXJ0aGRheSI6IjIwMTgtMDktMTdUMTk6MDA6MDAuMDAwWiIsIkNhZmVkcmFfaWQiOjIsImlzSGVhZCI6bnVsbCwibG9naW4iOiJhc2QiLCJpbWFnZSI6bnVsbCwiaW5mb1V6IjoiQWJkdWxsYXlldiBZdXN1ZiBOZWdtYXRvdmljaCwgdGFyaXggZmFubGFyaSBkb2t0b3JpIHByb2Zlc3Nvci4iLCJpbmZvUnUiOiJBYmR1bGxheWV2IFl1c3VmIE5lZ21hdG92aWNoLCB0YXJpeCBmYW5sYXJpIGRva3RvcmkgcHJvZmVzc29yLiIsImlhdCI6MTU1OTMyMjg1N30.vbJj-97wuAddAI3sBPBsSVjznASmGFvCl8w6o5j-0d0";
  public static role: number;
  public static user_id: number;

  async register(id: number, role: number) {
    const userRepo = getRepository('User') as Repository <User>;
    let user = await userRepo.findOne();
      if(user){

        user.role = role;
        user.user_id = id;

        return await userRepo.save(user);
      }
      else
      {
       let usernew = new User();
          usernew.role = role;
          usernew.user_id = id;
       return await userRepo.save(usernew);
      }
    }


    async getCurrentUser() {
      const userRepo = getRepository('User') as Repository <User>;
      let user = await userRepo.findOne();
        if(user){
          // Registered !!!
          AuthProvider.role = user.role;
          if(user.user_id)
            AuthProvider.user_id = user.user_id;
        }
        else
          AuthProvider.role = 0;  // Unregistered yet !!!
    }

    async logOut() {
      const userRepo = getRepository('User') as Repository <User>;
      let user = await userRepo.findOneById(1);
      user.role = 0;
      user.user_id = null;
      await userRepo.save(user);
      await getRepository('Table').clear();
      await getRepository('Badges').clear();
    }
}
