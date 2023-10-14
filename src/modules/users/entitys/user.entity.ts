import { 
    Entity,
    Column,
    CreateDateColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"

import { Tuit } from "src/modules/tuits/tuit.entity";


@Entity()
export class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    username: string;

    @Column({ nullable: false })
    password: string;

    @OneToMany(type => Tuit, (tuit) => tuit.user)
    tuits: Tuit[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}