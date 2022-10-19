import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class UsersEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({name: "first_name"})
    first_name: string;
    
    @Column({name: "last_name"})
    last_name: string;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({name: "created_at"})
    createdAt: string;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: string;

    @DeleteDateColumn({name: "deleted_at"})
    deletedAt: string;
}