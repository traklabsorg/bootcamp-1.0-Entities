import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group";
import { User } from "./user";

@Entity("groupUsers")
export class GroupUser extends EntityBase{

  @Column({ name: 'group_user_details',nullable:true , type:"json" })
  groupUserDetails: string;

  @Column({name: 'group_id', nullable:true})
  groupId: number;

  @Column({name: 'user_id', nullable:true})
  userId: number;

  @ManyToOne((type) => Group, group => group.groupUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @ManyToOne((type) => User, users => users.groupUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
  
}