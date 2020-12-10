import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Community } from "./communities";
import { LiveContentUser } from "./liveContentUser";
import { User } from "./user";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("liveContents")
export class LiveContent extends EntityBase{

  @Column({ name: 'url',nullable:true })
  url: string;

  @Column({ name: 'content_details',nullable:true, type:"json" })
  contentDetails: string;

  @Column({ name: 'start_date',nullable:true, default : Date.now() })
  startDate: Date;

  @Column({ name: 'end_date',nullable:true, default : Date.now() })
  endDate: Date;

  @Column({ name: 'user_meeting_provider_id',nullable:false})
  userMeetingProviderId: number;

  @ManyToOne((type) => Community, community => community.liveContents, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'community_id' })
  communityId: Community;

  @ManyToOne((type) => UserMeetingProvider, userMeetingProvider => userMeetingProvider.liveContents, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_meeting_provider_id' })
  userMeetingProvider: UserMeetingProvider;

  @OneToMany((type) => LiveContentUser, liveContentUser => liveContentUser.liveContent, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  liveContentUsers: LiveContentUser[]
}