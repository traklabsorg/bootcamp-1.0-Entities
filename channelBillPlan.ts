import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel";
import { Plan } from "./plan";

@Entity("channel_bill_plans")
export class ChannelBillPlan extends EntityBase{

  // @Column({ name: 'channel_id',nullable:true })
  // channelId: number;

  // @Column({ name: 'plan_id',nullable:true })
  // planId: number;

  // @PrimaryGeneratedColumn() channel_bill_plan_id: number;
  
  @Column({ name: 'additional_details',nullable:true, type:"json" })
  additionalDetails: string;

  @Column({ name: 'channel_bill_plan_details',nullable:true, type:"json" })
  channelBillPlanDetails: string;

  @Column({ name: 'plan_start_date', nullable:true, type: "timestamp"})
  planStartDate: Date;

  @Column({ name: 'subscription_end_date', nullable:true, type: "timestamp"})
  planEndDate: Date;

  @ManyToOne((type) => Channel, channels => channels.channelBillPlans, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  //@Column({name:'channel_id'})
  channelId: Channel;

  @ManyToOne((type) => Plan, plans => plans.channelBillPlans, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'plan_id' })
  planId: Plan;

  // @OneToMany((type) => Group, (customerRepresentatives) => customerRepresentatives.customer, {
	// 	onDelete: 'CASCADE'
	// })

  
}