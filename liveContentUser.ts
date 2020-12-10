import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Community } from "./communities";
import { LiveContent } from "./liveContent";
import { User } from "./user";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("liveContentUsers")
export class LiveContentUser extends EntityBase{

  @Column({ name: 'additonal_details',nullable:true, type:"json" })
  additionalDetails: string;

  @Column({ name: 'live_content_id',nullable:false})
  liveContentId: number;

  @Column({ name: 'user_id',nullable:false})
  userId: number;

  @ManyToOne((type) => LiveContent, liveContent => liveContent.liveContentUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'live_content_id' })
  liveContent: LiveContent;

  @ManyToOne((type) => User, user => user.liveContentUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

}