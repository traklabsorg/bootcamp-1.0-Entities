import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";
import { Section } from "./section";

@Entity("channels")
export class Channel extends EntityBase{

  @Column({ name: 'title',nullable:true })
  title: string;

  @Column({ name: 'channel_type',nullable:true })
  channelType: string;

  @Column({ name: 'channel_details',nullable:true, type:"json" })
  channelDetails: string;

  @Column({ name: 'group_id',nullable:true })
  groupId: number;

  @ManyToOne((type) => Group, group => group.channels, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @OneToMany((type) => ChannelBillPlan, channelBillPlan => channelBillPlan.channel, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  channelBillPlans: ChannelBillPlan[]

  @OneToMany((type) => Section, section => section.channel, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  sections: Section[]

}