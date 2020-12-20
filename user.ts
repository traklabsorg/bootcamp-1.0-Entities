import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Community } from "./communities";
import { EnrolledMeetings } from "./enrolledMeetings";
import { GroupUser } from "./groupUser";
import { LessonDataReview } from "./lessonDataReview";
import { LessonDataUser } from "./lessonDataUser";
import { LiveContent } from "./liveContent";
import { LiveContentUser } from "./liveContentUser";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("users")
export class User extends EntityBase {

  @Column({ name: 'user_name', nullable: true })
  userName: string;

  @Column({ name: 'community_id', nullable: false })
  communityId: number;

  @Column({ name: 'user_type', nullable: true })
  userType: string;

  @Column({ name: 'user_details', nullable: true , type:"json" })
  userDetails: string;

  @Column({ name: 'user_email', nullable: true ,})
  userEmail: string;

  @Column({ name: 'user_image', nullable: true })
  userImage: string;

  @Column({ name: 'is_active', nullable: true })
  isActive: string;

  @Column({ name: 'last_Logon_date_time', nullable:true, type: "timestamp with time zone"})
  lastLogonDateTime: Date;

  @Column({ name: 'user_additional_details', nullable: true , type:"json" })
  userAdditionalDetails: string;

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

  @ManyToOne((type) => Community, community => community.users, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'community_id' })
  community : Community;
  liveContents: any;

}
