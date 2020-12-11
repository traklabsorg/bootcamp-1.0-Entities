import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Community } from "./communities";
import { EnrolledMeetings } from "./enrolledMeetings";
import { GroupUser } from "./groupUser";
import { LessonDataReview } from "./lessonDataReview";
import { LessonDataUser } from "./lessonDataUser";
import { LiveContent } from "./liveContent";
import { LiveContentUser } from "./liveContentUser";
import { Tenant } from "./tenant";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("users")
export class User extends EntityBase {

  @Column({ name: 'group_name', nullable: true })
  groupName: string;

  @Column({ name: 'group_type', nullable: true })
  groupType: string;

  @Column({ name: 'group_details', nullable: true , type:"json" })
  groupDetails: string;

  @Column({ name: 'last_Logon_date_time', nullable:true, type: "timestamp"})
  lastLogonDateTime: Date;

  @OneToMany((type) => LiveContentUser, liveContentUser => liveContentUser.user, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  liveContentUsers: LiveContentUser[];

  @OneToMany((type) => UserMeetingProvider, userMeetingProvider => userMeetingProvider.user, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  userMeetingProviders: UserMeetingProvider[]
  
  @OneToMany((type) => GroupUser, (groupUser) => groupUser.user, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  groupUsers: GroupUser[];

  @OneToMany((type) => EnrolledMeetings, enrolledMeetings => enrolledMeetings.user, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  enrolledMeetings: EnrolledMeetings[];

  @OneToMany((type) => LessonDataReview, lessonDataReviews => lessonDataReviews.user, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  lessonDataReviews: LessonDataReview[];

  @OneToMany((type) => LessonDataUser, lessonDataUser => lessonDataUser.user, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  lessonDataUsers: LessonDataUser[]

  @ManyToOne((type) => Community, community => community.groups, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'community_id' })
  communityId : Community;

}
