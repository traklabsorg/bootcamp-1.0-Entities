import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";

@Entity("channels")
export class Channel extends EntityBase{

  // @PrimaryGeneratedColumn() channel_id: number;
  @Column({ name: 'title',nullable:true })
  title: string;

  @Column({ name: 'channel_type',nullable:true })
  channelType: string;

  @Column({ name: 'channel_details',nullable:true, type:"json" })
  channelDetails: string;

  @ManyToOne((type) => Group, group => group.channels, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'group_id' })
  groupId: Group;

  @OneToMany((type) => ChannelBillPlan, channelBillPlan => channelBillPlan.channelId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  channelBillPlans: ChannelBillPlan[]
  // @OneToMany((type) => Group, (customerRepresentatives) => customerRepresentatives.customer, {
	// 	onDelete: 'CASCADE'
	// })

  
}