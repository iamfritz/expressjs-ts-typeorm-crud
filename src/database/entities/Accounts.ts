import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm";

@Entity("accounts")
export class Accounts {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    evidence_provider_account_id: string;

    @Column()
    api_key: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
