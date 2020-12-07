import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("enrolled_meetings")
export class EnrolledMeetings extends EntityBase{

  @ManyToOne((type) => User, user => user.enrolledMeetings, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  userId: User;

  @OneToMany((type) => UserMeetingProvider, userMeetingProvider => userMeetingProvider.enrolledMeetingId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  userMeetingProviderId: UserMeetingProvider[]
}