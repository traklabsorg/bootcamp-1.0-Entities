import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TopicSubscription } from "./topicSubscription";




@EntityBase("topicOnFailure")
export class TopicOnFailure extends EntityBase{
  @Column({ name: 'subscriber_id', nullable: false })
  subscriberId: number;

  @Column({ name: 'topic_id', nullable: false })
  topicId: number;

  @ManyToOne((type) => TopicSubscription, topicSubscription => topicSubscription.topicOnFailure,{
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'topic_id' })
  topicSubscription: TopicSubscription;

}