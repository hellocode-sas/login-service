import { User } from './../../model/user';
import { UserRepository } from './../user-repository';
/**
 * In-memory depository
 */
export class UserMemoryRepository implements UserRepository{
    private storage: Map<string,User> = new Map();
    save(user: User): User {
       this.storage.set(user.name, user);
       return user;
    }
    exists(username: string): boolean {
        return this.storage.has(username);
    }
    login(username: string, password: string): User {
    console.log(`Login Username:${username}, pass:${password}`)
       const found= this.storage.get(username);
       console.log("Found", JSON.stringify(found))
       if(!found || (found.password !== password && found.active)) return null;
        else return found;
    }
    delete(username: string): boolean {
        const found= this.storage.get(username);
        console.log("Found", JSON.stringify(found))
        if(!found || !found.active) return false;
         else {
             found.active = false;
             return true;
         };
    }

    all(): User[] {
      const data: User[]= new Array();
      this.storage.forEach((val:User)=>{ data.push(val)});
      return data;
    }
}