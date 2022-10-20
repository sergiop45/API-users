import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { hashSync } from "bcrypt";

@Entity({name: 'users'})
export class UsersEntity {

    @PrimaryGeneratedColumn('uuid')
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

    @BeforeInsert()
    hashPass() {
        this.password = hashSync(this.password, 10);
    }
}