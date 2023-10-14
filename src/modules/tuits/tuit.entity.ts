import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

import { User } from "../users/entitys";

@Entity()
export class Tuit {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    message: string;

    @ManyToOne(type => User, user => user.tuits, {cascade: true})
    @JoinColumn({name: "user_id"})
    user: User;
}