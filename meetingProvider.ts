import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("meetingProviders")
export class MeetingProvider extends EntityBase{

  @Column({ name: 'provider_name',nullable:false })
  providerName: string;

  @Column({ name: 'provider_details',nullable:true , type:"json" })
  providerDetails: string;

  @OneToMany((type) => UserMeetingProvider, (userMeetingProvider) => userMeetingProvider.meetingProvider, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  userMeetingProviders : UserMeetingProvider[]

}