import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Community } from "./communities";
import { LiveContent } from "./liveContent";
import { User } from "./user";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("liveContentUsers")
export class LiveContentUser extends EntityBase{

  @Column({ name: 'additional_details',nullable:true, type:"json" })
  additionalDetails: string;

  @Column({ name: 'live_content_id',nullable:false})
  liveContentId: number;

  @Column({ name: 'user_id',nullable:false})
  userId: number;

  @Column({ name: 'invitation_type',nullable:false})
  invitationType: string;

  @ManyToOne((type) => LiveContent, liveContent => liveContent.liveContentUser, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'live_content_id' })
  liveContent: LiveContent;

  @ManyToOne((type) => User, user => user.liveContentUser, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

}