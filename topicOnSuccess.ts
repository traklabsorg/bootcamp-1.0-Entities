// //Done

import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TopicSubscription } from "./topicSubscription";




@EntityBase("topicOnSuccess")
export class TopicOnSuccess extends EntityBase{
  @Column({ name: 'subscriber_id', nullable: false })
  subscriberId: number;

  @Column({ name: 'topic_id', nullable: false })
  topicId: number;

  @ManyToOne((type) => TopicSubscription, topicSubscription => topicSubscription.topicOnSuccess,{
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'topic_id' })
  topicSubscriptionSuccess: TopicSubscription;


  @ManyToOne((type) => TopicSubscription, topicSubscription => topicSubscription.topicOnFailure,{
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'topic_id' })
  topicSubscription: TopicSubscription;
}
// @Entity("groups")
// export class Group extends EntityBase{

//   @Column({ name: 'group_name',nullable:true })
//   groupName: string;

//   @Column({ name: 'group_type',nullable:true })
//   groupType: string;

//   @Column({ name: 'group_details',nullable:true, type:"json" })
//   groupDetails: string;

//   @Column({ name: 'group_payer_type',nullable:true})
//   groupPayerType: string;

//   @Column({name: 'community_id', nullable:false})
//   communityId: number;

//   @OneToMany((type) => Channel, (channels) => channels.group, {
// 		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
//   })
//   channels: Channel[]
  
//   @OneToMany((type) => GroupUser, (groupUser) => groupUser.group, {
// 		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
//   })
//   groupUsers : GroupUser[]

//   @ManyToOne((type) => Community, community => community.groups, {
//     onDelete: 'CASCADE',onUpdate: 'RESTRICT'
//   })
//   @JoinColumn({ name: 'community_id' })
//   community : Community;    // 
//   // rhega...integer
// }