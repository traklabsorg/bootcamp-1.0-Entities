//Done

import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel";
import { Community } from "./communities";
import { GroupUser } from "./groupUser";
import { Tenant } from "./tenant";

@Entity("groups")
export class Group extends EntityBase{

  @Column({ name: 'group_name',nullable:true })
  groupName: string;

  @Column({ name: 'group_type',nullable:true })
  groupType: string;

  @Column({ name: 'group_details',nullable:true, type:"json" })
  groupDetails: string;

  @ManyToOne((type) => Tenant, tenants => tenants.groups, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'tenant_id' })
  tenantId: Tenant;

  @OneToMany((type) => Channel, (channels) => channels.groupId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  channels: Channel[]
  
  @OneToMany((type) => GroupUser, (groupUser) => groupUser.groupId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  groupUsers : GroupUser[]

  @ManyToOne((type) => Community, community => community.groups, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'community_id' })
  communityId : Community;
  
}