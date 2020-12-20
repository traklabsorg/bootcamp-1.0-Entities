import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
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

  @Column({ name: 'start_date',nullable:true })
  startDate: Date;

  @Column({ name: 'end_date',nullable:true })
  endDate: Date;

  @Column({ name: 'user_meeting_provider_id',nullable:false})
  userMeetingProviderId: number;

  @Column({ name: 'meeting_provider_id',nullable:false})
  meetingProviderId: number;

  @ManyToOne((type) => User, user => user.liveContents, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
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