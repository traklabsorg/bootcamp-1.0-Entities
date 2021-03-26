import { SubscriptionOrder } from './subscriptionOrder';
import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Community } from "./communities";
import { EnrolledMeetings } from "./enrolledMeetings";
import { GroupUser } from "./groupUser";
import { LessonDataReview } from "./lessonDataReview";
import { LessonDataUser } from "./lessonDataUser";
import { LiveContent } from "./liveContent";
import { LiveContentUser } from "./liveContentUser";
import { UserMeetingProvider } from "./userMeetingProvider";
import { Payment } from "./payment";
import { ChannelUser } from "./channelUser";
import { SectionReview } from './sectionReview';

@Entity("users")
@Unique(["communityId","userEmail"])

export class User extends EntityBase {

  @Column({ name: 'user_name', nullable: true })
  userName: string;

  @Column({ name: 'community_id', nullable: false })
  communityId: number;

  @Column({ name: 'user_type', nullable: true })
  userType: string;

  @Column({ name: 'user_details', nullable: true, type: "json" })
  userDetails: string;

  @Column({ name: 'user_email', nullable: true, })
  userEmail: string;

  @Column({ name: 'user_image', nullable: true })
  userImage: string;

  @Column({ name: 'is_active', nullable: true })
  isActive: string;

  @Column({ name: 'last_Logon_date_time', nullable: true, type: "timestamp with time zone" })
  lastLogonDateTime: Date;

  @Column({ name: 'user_additional_details', nullable: true, type: "json" })
  userAdditionalDetails: string;

  @Column({ name: "external_user_id", nullable: true })
  externalUserId: number;

  @Column({ name: "external_tenant_user_id", nullable: true })
  externalTenantUserId: number;

  @Column({ name: "external_tenant_user_app_id", nullable: true })
  externalTenantUserAppId: number;



  @OneToMany((type) => LiveContentUser, liveContentUser => liveContentUser.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  liveContentUser: LiveContentUser[];

  @OneToMany((type) => UserMeetingProvider, userMeetingProvider => userMeetingProvider.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  userMeetingProvider: UserMeetingProvider[]

  @OneToMany((type) => GroupUser, (groupUser) => groupUser.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  groupUser: GroupUser[];

  @OneToMany((type) => EnrolledMeetings, enrolledMeetings => enrolledMeetings.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  enrolledMeeting: EnrolledMeetings[];

  @OneToMany((type) => LessonDataReview, lessonDataReviews => lessonDataReviews.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  lessonDataReview: LessonDataReview[];

  @OneToMany((type) => LessonDataUser, lessonDataUser => lessonDataUser.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  lessonDataUser: LessonDataUser[]

  @OneToMany((type) => Payment, payment => payment.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  payment: Payment[]


  @OneToMany((type) => LiveContent, liveContent => liveContent.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  liveContent: LiveContent[]


  @OneToMany((type) => ChannelUser, channelUser => channelUser.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  channelUser: ChannelUser[];

  @OneToMany((type) => SubscriptionOrder, subscriptionOrder => subscriptionOrder.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  subscriptionOrder: SubscriptionOrder[];

  @OneToMany((type) => SectionReview, sectionReview => sectionReview.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  sectionReview: SectionReview[];

  @ManyToOne((type) => Community, community => community.user, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;

}
