import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LiveContentUser } from "./liveContentUser";
import { User } from "./user";
import { UserMeetingProvider } from "./userMeetingProvider";
import { MeetingProvider } from "./meetingProvider";

@Entity("liveContents")
export class LiveContent extends EntityBase{

  @Column({ name: 'url',nullable:true })
  url: string;

  @Column({ name: 'content_details',nullable:true, type:"json" })
  contentDetails: string;


  @Column({ name: 'webinar_details',nullable:true, type:"json" })
  webinarDetails: string;

  @Column({ name: 'host_users',nullable:true, type:"json" })
  hostUsers: string;

  @Column({ name: 'type_of_registration',nullable:true })
  typeOfRegistration: string;


  @Column({ name: 'start_date_time',nullable:true })
  startDateTime: Date;

  @Column({ name: 'duration',nullable:true })
  duration: number;

  @Column({ name: 'end_date',nullable:true })
  endDate: Date;

  // @Column({ name: 'user_meeting_provider_id',nullable:false})
  // userMeetingProviderId: number;

  @Column({ name: 'meeting_provider_id',nullable:false})
  meetingProviderId: number;

  @Column({ name: 'user_id',nullable:true})
  userId: number;

  @ManyToOne((type) => User, user => user.liveContents, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
    
  @JoinColumn({ name: 'primary_host_user_id' })
  user: User;


  @ManyToOne((type) => MeetingProvider, meetingProvider => meetingProvider.liveContents, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'meeting_provider_id' })
  meetingProvider: MeetingProvider;

  @OneToMany((type) => LiveContentUser, liveContentUser => liveContentUser.liveContent, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  liveContentUsers: LiveContentUser[]

  // @ManyToOne((type) => Community, community => community.liveContents, {
  //   onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  // })
  // @JoinColumn({ name: 'community_id' })
  // community: Community;
}