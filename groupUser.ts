import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group";
import { User } from "./user";

@Entity("groupUsers")
export class GroupUser extends EntityBase{

  @Column({ name: 'group_user_details',nullable:true , type:"json" })
  groupUserDetails: string;

  @Column({name: 'group_id', nullable:false})
  groupId: number;

  @Column({name: 'user_id', nullable:false})
  userId: number;

  @Column({name: 'group_image', nullable:false})
  groupImage: string;

  @Column({name: 'invitation_status', nullable:true})
  invitationStatus: string;

  @Column("int",{name: 'role_ids', nullable:true, array:true})
  roleIds: number[];


  @ManyToOne((type) => Group, group => group.groupUser, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @ManyToOne((type) => User, user => user.groupUser, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
  
}
