import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("meeting_providers")
export class MeetingProvider extends EntityBase{

  // @PrimaryGeneratedColumn() meeting_provider_id: number;

  @Column({ name: 'provider_name',nullable:true })
  providerName: string;


  @Column({ name: 'provider_details',nullable:true , type:"json" })
  providerDetails: string;

  @OneToMany((type) => UserMeetingProvider, (userMeetingProvider) => userMeetingProvider.meetingProviderId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  userMeetingProviders : UserMeetingProvider[]


  // @OneToMany((type) => Group, (customerRepresentatives) => customerRepresentatives.customer, {
	// 	onDelete: 'CASCADE'
	// })

  
}