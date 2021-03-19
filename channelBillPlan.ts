import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Subscription } from "./subscription";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Channel } from "./channel";
import { Plan } from "./plan";

@Entity("channelBillPlans")
@Unique(["channelId", "planId"])
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
  planId: number;
  
  @Column({name: 'price', nullable:true})
  price:number;

  @ManyToOne((type) => Channel, channels => channels.channelBillPlan, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  channel: Channel;

  @ManyToOne((type) => Plan, plans => plans.channelBillPlan, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'plan_id' })
  plan: Plan;

  @OneToMany((type) => Subscription, subscription => subscription.channelBillPlan, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  subscription: Subscription[];

}