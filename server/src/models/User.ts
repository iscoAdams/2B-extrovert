import {
  DataType,
  Model,
  Table,
  Column,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { Post } from "./Post";
import { Comment } from "./Comment";
import { Story } from "./Story";
import { Follower } from "./Follower";

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nickName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

  @Column
  profilePic: string;

  @Column
  coverPic: string;

  @Column
  bio: string;

  @Column
  city: string;

  @HasMany(() => Post)
  posts: Post[];

  @HasMany(() => Comment)
  comments: Comment[];

  @HasMany(() => Story)
  stories: Story[];

  @BelongsToMany(() => User, () => Follower)
  followers: User[];
}
