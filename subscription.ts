import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { SubscriptionOrder } from "./subscriptionOrder";

@Entity("subscription")
export class Subscription extends EntityBase{

  @Column({ name: 'subscription_details',nullable:true, type:"json" })
  subscriptionDetails: string;

  @Column({ name: 'is_auto_renew',nullable:true })
  isAutoRenew: boolean;

  @Column({ name: 'is_active',nullable:true })
  isActive: boolean;

  @Column({ name: 'subscription_type',nullable:true })
  subscriptionType: string;

  @Column({ name: 'start_date_time',nullable:true })
  startDateTime: Date;

  @Column({ name: 'end_date_time',nullable:true })
  endDateTime: Date;

  @Column({ name: 'transaction_date_time',nullable:true })
  transactionDateTime: Date;

  @Column({name: 'channel_bill_plan_id', nullable:true})
  channelBillPlanId: number;

  @ManyToOne((type) => ChannelBillPlan, channelBillPlan => channelBillPlan.subscriptions, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_bill_plan_id' })
  channelBillPlan: ChannelBillPlan;

  @OneToMany((type) => SubscriptionOrder, subscriptionOrder => subscriptionOrder.subscription, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  subscriptionOrders: SubscriptionOrder[]
}