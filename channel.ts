import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";
import { Section } from "./section";
import { Community } from "./communities";
import { LessonDataUser } from "./lessonDataUser";
import { ChannelGroup } from "./channelGroup";
import { ChannelUser } from "./channelUser";


@Entity("channels")
export class Channel extends EntityBase{

  @Column({ name: 'title',nullable:true })
  title: string;

  @Column({ name: 'channel_type',nullable:true })
  channelType: string;

  @Column({ name: 'is_draft',nullable:true })
  isDraft: string;

  @Column({ name: 'channel_details',nullable:true, type:"json" })
  channelDetails: string;

  @Column({name:"channel_sequence_id",nullable:true})
  channelSequenceId: number;

  @Column({ name: 'community_id',nullable:true })
  communityId: number;

  @ManyToOne((type) => Community, community => community.channel, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'community_id' })
  community:Community;

  // @ManyToOne((type) => Group, group => group.channels, {
  //   onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  // })
  // @JoinColumn({ name: 'group_id' })
  // group: Group;

  @OneToMany((type) => ChannelBillPlan, channelBillPlan => channelBillPlan.channel, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  channelBillPlan: ChannelBillPlan[]

  @OneToMany((type) => Section, section => section.channel, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  section: Section[]

  // @OneToMany((type) => LessonDataUser, lessonDataUser => lessonDataUser.channel, {
	// 	onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  // })
  // lessonDataUsers: LessonDataUser[]

  @OneToMany((type) => ChannelGroup, channelGroup => channelGroup.channel, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  channelGroup: ChannelGroup[]

  @OneToMany((type) => ChannelUser, channelUser => channelUser.channel, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  channelUser: ChannelUser[];

 
}