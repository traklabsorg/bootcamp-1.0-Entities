import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel";
import { Lesson } from "./lesson";

@Entity("section")
export class Section extends EntityBase{

  @Column({ name: 'title',nullable:true })
  title: string;

  @Column({ name: 'channel_id',nullable:false})
  channelId: number;

  @ManyToOne((type) => Channel, channel => channel.sections, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  channel: Channel;

  @OneToMany((type) => Lesson, lesson => lesson.section, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  lessons: Lesson[];

}