import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel";
import { Lesson } from "./lesson";
import { TopicSubscription } from "./topicSubscription";

@Entity("topic")
export class Topic extends EntityBase{

  @Column({ name: 'topic_name',nullable:true })
  topicName: string;

  @Column({ name: 'topic_arn', nullable: false })
  topicArn: string;

  @OneToMany((type) => TopicSubscription, topicSubscription => topicSubscription.topicId, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  topicSubscriptions: TopicSubscription[];
  

  // @ManyToOne((type) => Channel, channel => channel.sections, {
  //   onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  // })
  // @JoinColumn({ name: 'channel_id' })
  // channel: Channel;

  // @OneToMany((type) => Lesson, lesson => lesson.section, {
	// 	onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  // })
  // lessons: Lesson[];

}