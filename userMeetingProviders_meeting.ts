import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("user_meeting_providers_meetings")
export class UserMeetingProviders_Meeting extends EntityBase {

  // @PrimaryGeneratedColumn() user_meeting_providers_meeting_id: number;

  @ManyToOne((type) => UserMeetingProvider, userMeetingProviders => userMeetingProviders.userMeetingProvider_meetings, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_meeting_provider_id' })
  userMeetingProviderId: UserMeetingProvider;

  @Column({ name: 'meeting_detail', nullable: true , type:"json" })
  meetingDetail: string;

  @Column({ name: 'meeting_start_date_time', nullable:true, type: "timestamp"})
  meetingStartDateTime: Date;

  @Column({ name: 'meeting_end_date_time', nullable:true, type: "timestamp"})
  meetingEndDateTime: Date;

}