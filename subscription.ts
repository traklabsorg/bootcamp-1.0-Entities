import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";
import { SubscriptionOrder } from "./subscriptionOrder";

@Entity("channels")
export class Subscription extends EntityBase{

  // @PrimaryGeneratedColumn() channel_id: number;
  @Column({ name: 'subscription_details',nullable:true, type:"json" })
  subscriptionDetails: string;

  @Column({ name: 'is_auto_renew',nullable:true })
  isAutoRenew: boolean;

  @Column({ name: 'is_auto_renew',nullable:true })
  isActive: boolean;

  @Column({ name: 'subscription_type',nullable:true })
  subscriptionType: string;

  @Column({ name: 'start_date_time',nullable:true, default : Date.now() })
  startDateTime: Date;

  @Column({ name: 'end_date_time',nullable:true, default : Date.now() })
  endDateTime: Date;

  @Column({ name: 'transaction_date_time',nullable:true, default : Date.now() })
  transactionDateTime: Date;

  @ManyToOne((type) => ChannelBillPlan, channelBillPlan => channelBillPlan.channelBillPlans, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_bill_plan_id' })
  channelBillPlanId: ChannelBillPlan;

  @OneToMany((type) => SubscriptionOrder, subscriptionOrder => subscriptionOrder.subscription, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  subscriptionOrders: SubscriptionOrder[]
}