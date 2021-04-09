import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { SubscriptionOrder } from "./subscriptionOrder";

@Entity("subscriptions")
@Unique(["channelBillPlanId", "communityId", "startDateTime", "endDateTime"])
export class Subscription extends EntityBase {

  @Column({ name: 'subscription_details', nullable: true, type: "json" })
  subscriptionDetails: string;

  @Column({ name: 'is_auto_renew', nullable: true })
  isAutoRenew: boolean;

  @Column({ name: 'is_active', nullable: true })
  isActive: boolean;

  @Column({ name: 'subscription_type', nullable: true })
  subscriptionType: string;

  @Column({ name: 'start_date_time', nullable: true, type: "timestamp with time zone" })
  startDateTime: Date;

  @Column({ name: 'end_date_time', nullable: true, type: "timestamp with time zone" })
  endDateTime: Date;

  @Column({ name: 'transaction_date_time', nullable: true, type: "timestamp with time zone" })
  transactionDateTime: Date;

  @Column({ name: 'channel_bill_plan_id', nullable: true })
  channelBillPlanId: number;

  @Column({ name: 'community_id', nullable: true })
  communityId: number;

  @ManyToOne((type) => ChannelBillPlan, channelBillPlan => channelBillPlan.subscription, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })

  @JoinColumn({ name: 'channel_bill_plan_id' })
  channelBillPlan: ChannelBillPlan;

  @OneToMany((type) => SubscriptionOrder, subscriptionOrder => subscriptionOrder.subscription, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  subscriptionOrder: SubscriptionOrder[]
}