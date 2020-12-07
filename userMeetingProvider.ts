import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MeetingProvider } from "./meetingProvider";
import { User } from "./user";
import { UserMeetingProviders_Meeting } from "./userMeetingProviders_meeting";

@Entity("user_meeting_providers")
export class UserMeetingProvider extends EntityBase {

  // @Column({ name: 'user_id', nullable: true })
  // userId: number;


  // @PrimaryGeneratedColumn() user_meeting_provider_id: number;

  
  @OneToMany((type) => UserMeetingProviders_Meeting, userMeetingProvider_meeting => userMeetingProvider_meeting.userMeetingProviderId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  userMeetingProvider_meetings: UserMeetingProviders_Meeting[]

  @ManyToOne((type) => User, users => users.userMeetingProviders, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  userId: User;


  @ManyToOne((type) => MeetingProvider, meetingProviders => meetingProviders.userMeetingProviders, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'meeting_provider_id' })
  meetingProviderId: MeetingProvider;

}