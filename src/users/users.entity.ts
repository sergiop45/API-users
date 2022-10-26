import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { hash, hashSync } from 'bcrypt';
  import { BeforeInsert } from 'typeorm';
  
  @Entity({ name: 'users' })
  export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    first_name: string;
  
    @Column()
    last_name: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
  
    @BeforeInsert()
     cripto (){
      this.password =  hashSync(this.password, 10)
    };
    
    
    
  }

  