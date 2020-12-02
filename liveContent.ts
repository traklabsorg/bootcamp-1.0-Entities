import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Section } from "./section";
import { UserMeetingProvider } from "./userMeetingProvider";

@Entity("live_contents")
export class LiveContent extends EntityBase{

  // @PrimaryGeneratedColumn() channel_id: number;
  @Column({ name: 'utl',nullable:true })
  url: string;

  @Column({ name: 'content_details',nullable:true, type:"json" })
  contentDetails: string;

  @ManyToOne((type) => Section, section => section.liveContents, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'section_id' })
  liveContentId: Section;

  @ManyToOne((type) => UserMeetingProvider, userMeetingProvider => userMeetingProvider.liveContents, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_meeting_provider_id' })
  userMeetingProviderId: UserMeetingProvider;

}