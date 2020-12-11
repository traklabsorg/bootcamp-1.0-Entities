import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { UserMeetingProviders_Meeting } from "./userMeetingProviders_meeting";

@Entity("enrolledMeetings")
export class EnrolledMeetings extends EntityBase{

  @Column({ name: 'enrolled_on', nullable:true, type: "timestamp"})
  enrolledOn: Date;

  @Column({name: 'user_id', nullable:true})
  userId: number;

  @Column({name: 'host_user_id', nullable:true})
  hostUserId: number;

  @ManyToOne((type) => User, user => user.enrolledMeetings, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne((type) => User, user => user.enrolledMeetings, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'host_user_id' })
  hostUser: User;

  @OneToOne(() => UserMeetingProviders_Meeting)
  @JoinColumn({name: 'user_meeting_provider_meeting_id'})
  userMeetingProviderMeetingId: UserMeetingProviders_Meeting;
}