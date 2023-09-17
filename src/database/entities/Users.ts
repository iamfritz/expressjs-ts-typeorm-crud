import { PrimaryGeneratedColumn, Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
import { Accounts } from './Accounts';


@Entity("users")
export class Users {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column("ObjectID")
    public account: ObjectID;

    @Column()
    remote_id: string;

    @Column()
    evidence_provider_id: string;

    @Column()
    evidence_provider_account_id: string;

    @Column()
    account_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
