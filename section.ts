import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel";
import { ChannelBillPlan } from "./channelBillPlan";
import { Content } from "./content";
import { Group } from "./group";
import { LiveContent } from "./liveContent";

@Entity("section")
export class Section extends EntityBase{

  // @PrimaryGeneratedColumn() channel_id: number;
  @Column({ name: 'title',nullable:true })
  title: string;

  @ManyToOne((type) => Channel, channel => channel.channelId, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  channelId: Channel;

  @OneToMany((type) => Content, content => content.contentId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  contents: Content[];

  @OneToMany((type) => LiveContent, liveContent => liveContent.liveContentId, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  liveContents: LiveContent[];
}