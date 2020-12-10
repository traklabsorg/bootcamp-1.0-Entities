import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Subscription } from "./subscription";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel";
import { Plan } from "./plan";

@Entity("channelBillPlans")
export class ChannelBillPlan extends EntityBase{
  
  @Column({ name: 'additional_details',nullable:true, type:"json" })
  additionalDetails: string;

  @Column({ name: 'channel_bill_plan_details',nullable:true, type:"json" })
  channelBillPlanDetails: string;

  @Column({ name: 'plan_start_date', nullable:true, type: "timestamp"})
  planStartDate: Date;

  @Column({ name: 'plan_end_date', nullable:true, type: "timestamp"})
  planEndDate: Date;

  @Column({name: 'channel_id', nullable:true})
  channelId:number;

  @Column({name: 'plan_id', nullable:true})
  planId:number;

  @ManyToOne((type) => Channel, channels => channels.channelBillPlans, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  channel: Channel;

  @ManyToOne((type) => Plan, plans => plans.channelBillPlans, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'plan_id' })
  plan: Plan;

  @OneToMany((type) => Subscription, subscription => subscription.channelBillPlan, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  subscriptions: Subscription[];

}