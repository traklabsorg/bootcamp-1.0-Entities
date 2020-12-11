import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("userMeetingProvidersMeetings")
export class UserMeetingProviders_Meeting extends EntityBase {

  @Column({ name: 'meeting_details', nullable: true , type:"json" })
  meetingDetail: string;

  @Column({ name: 'meeting_start_date_time', nullable:true, type: "timestamp"})
  meetingStartDateTime: Date;

  @Column({ name: 'meeting_end_date_time', nullable:true, type: "timestamp"})
  meetingEndDateTime: Date;

  @Column({name: 'meeting_type', nullable:true})
  meetingType: string;

  @Column({ name: 'user_meeting_provider_id',nullable:false})
  meetingProviderId: number;

  @ManyToOne((type) => UserMeetingProvider, userMeetingProviders => userMeetingProviders.userMeetingProvider_meetings, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_meeting_provider_id' })
  userMeetingProvider: UserMeetingProvider;
}