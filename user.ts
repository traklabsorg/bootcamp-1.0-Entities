import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Community } from "./communities";
import { EnrolledMeetings } from "./enrolledMeetings";
import { GroupUser } from "./groupUser";
import { Tenant } from "./tenant";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("users")
export class User extends EntityBase {

  // @Column({ name: 'tenant_id', nullable: true })
  // tenantId: number;

  // @PrimaryGeneratedColumn() user_id: number;

  @Column({ name: 'group_name', nullable: true })
  groupName: string;

  @Column({ name: 'group_type', nullable: true })
  groupType: string;

  @Column({ name: 'group_details', nullable: true , type:"json" })
  groupDetails: string;

  @ManyToOne((type) => Tenant, tenants => tenants.users, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'tenant_id' })
  tenantId: Tenant;

  @OneToMany((type) => UserMeetingProvider, userMeetingProvider => userMeetingProvider.userId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  userMeetingProviders: UserMeetingProvider[]
  
  @OneToMany((type) => GroupUser, (groupUser) => groupUser.userId, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  groupUsers: GroupUser[];

  @OneToMany((type) => EnrolledMeetings, enrolledMeetings => enrolledMeetings.userId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  enrolledMeetings: EnrolledMeetings[]

  @ManyToOne((type) => Community, community => community.groups, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'community_id' })
  communityId : Community;
}
