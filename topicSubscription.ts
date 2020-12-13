import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel";
import { Lesson } from "./lesson";
import { Topic } from "./topic";
import { TopicOnSuccess } from "./topicOnSuccess";
import { TopicOnFailure } from "./topicOnFailure";

@Entity("topicSubscriptions")
export class TopicSubscription extends EntityBase{

  @Column({ name: 'topic_id', nullable: false })
  topicId: string;

  @Column({ name: 'subscription_name', nullable: true })
  subscriptionName: string;

  @Column({ name: 'queue_arn', nullable: true })
  queueArn: string;

  @Column({ name: 'queue_name', nullable: true })
  queueName: string;

  @Column({ name: 'topic_on_success', type: JSON,nullable:true })
  topicOnSuccess: number;

  @Column({ name: 'topic_on_failure', type: JSON,nullable:true })
  topicOnFailure: number;
  // @Column({ name: 'title',nullable:true })
  // title: string;

  // @Column({ name: 'channel_id',nullable:false})
  // channelId: number;

  @ManyToOne((type) => Topic, topic => topic.topicSubscriptions,{
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'topic_id' })
  topic: Topic;
  
  @OneToMany((type) => TopicOnSuccess, topicOnSuccess => topicOnSuccess.topicId, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  topicOnSuccess: TopicOnSuccess[];

  @OneToMany((type) => TopicOnFailure, topicOnFailure => topicOnFailure.topicId, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  topicOnSuccess: TopicOnFailure[];

  // @OneToMany((type) => Lesson, lesson => lesson.section, {
	// 	onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  // })
  // lessons: Lesson[];

}