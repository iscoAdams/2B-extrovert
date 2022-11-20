import { ForeignKey, Table, Column, Model } from "sequelize-typescript";
import { User } from "./User";

@Table
export class Follower extends Model<Follower> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => User)
    @Column
    followerId: number;
}