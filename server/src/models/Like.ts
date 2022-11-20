import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
  import { User } from "./User";
  import { Post } from "./Post";
  
  @Table
  export class Like extends Model<Like> {
  
    @ForeignKey(() => User)
    @Column
    userId: number;
  
    @BelongsTo(() => User)
    user: User;
  
    @ForeignKey(() => Post)
    @Column
    postId: number;
  
    @BelongsTo(() => Post)
    post: Post;
  }
  