import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LiveContent } from "./liveContent";
import { MeetingProvider } from "./meetingProvider";
import { User } from "./user";
import { UserMeetingProviders_Meeting } from "./userMeetingProviders_meeting";

@Entity("userMeetingProviders")
export class UserMeetingProvider extends EntityBase {

  @Column({ name: 'meeting_provider_details',nullable:true, type:"json" })
  Details: string;

  @Column({ name: 'user_id',nullable:false})
  userId: number;

  @Column({ name: 'meeting_provider_id',nullable:false})
  meetingProviderId: number;
  
  @OneToMany((type) => UserMeetingProviders_Meeting, userMeetingProvider_meeting => userMeetingProvider_meeting.userMeetingProvider, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  userMeetingProvider_meetings: UserMeetingProviders_Meeting[]

  @ManyToOne((type) => User, users => users.userMeetingProviders, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne((type) => MeetingProvider, meetingProviders => meetingProviders.userMeetingProviders, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'meeting_provider_id' })
  meetingProvider: MeetingProvider;

  // @OneToMany((type) => LiveContent, liveContent => liveContent.userMeetingProvider, {
	// 	onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  // })
  // liveContents: LiveContent[]
}