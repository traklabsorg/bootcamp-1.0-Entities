//Done

import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel";
import { Community } from "./communities";
import { GroupUser } from "./groupUser";
import { ChannelGroup } from "./ChannelGroup";

@Entity("groups")
export class Group extends EntityBase{

  @Column({ name: 'group_name',nullable:true })
  groupName: string;

  @Column({ name: 'group_type',nullable:true })
  groupType: string;

  @Column({ name: 'group_details',nullable:true, type:"json" })
  groupDetails: string;

  @Column({ name: 'group_payer_type',nullable:true})
  groupPayerType: string;

  @Column({name: 'community_id', nullable:false})
  communityId: number;

  @Column({ name: "is_active", nullable: true })
  isActive: string;

  @OneToMany((type) => ChannelGroup, (channelGroup) => channelGroup.group, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  channelGroups: ChannelGroup[]
  
  @OneToMany((type) => GroupUser, (groupUser) => groupUser.group, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  groupUsers : GroupUser[]

  @ManyToOne((type) => Community, community => community.groups, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'community_id' })
  community : Community;    
  // rhega...integer
}