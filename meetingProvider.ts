import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserMeetingProvider } from "./userMeetingProvider";
import { LiveContent } from "./liveContent";

@Entity("meetingProviders")
export class MeetingProvider extends EntityBase{

  @Column({ name: 'provider_name',nullable:false })
  providerName: string;

  @Column({ name: 'provider_details',nullable:true , type:"json" })
  providerDetails: string;

  @OneToMany((type) => UserMeetingProvider, (userMeetingProvider) => userMeetingProvider.meetingProvider, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  userMeetingProviders: UserMeetingProvider[]
  
  @OneToMany((type) => LiveContent, (liveContent) => liveContent.meetingProvider, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  liveContents: LiveContent[];

}