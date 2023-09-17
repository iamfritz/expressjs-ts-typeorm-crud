import {Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm"; 
import { Accounts } from './Accounts';


@Entity("settings")
export class Settings {
    @ObjectIdColumn() 
    id: ObjectID; 

    @Column("ObjectID") 
    account: ObjectID;
    
    @Column() 
    organization_id: number; 
    
    @Column() 
    setting_slug: string; 

    @Column() 
    setting_value: string; 

    @Column() 
    created_by: number; 

    @Column()
    setting_value_expired_by:Date;

    @CreateDateColumn() 
    created_at: Date; 

    @UpdateDateColumn() 
    updated_at: Date; 

    @DeleteDateColumn () 
    deleted_at: Date; 
}
