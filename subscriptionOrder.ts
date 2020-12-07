import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany,OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";
import { Payment } from "./payment";
import { Subscription } from "./subscription";

@Entity("subscription_order")
export class SubscriptionOrder extends EntityBase{

  @Column({ name: 'title',nullable:true })
  title: string;

  @Column({ name: 'channel_type',nullable:true })
  channelType: string;

  @Column({ name: 'channel_details',nullable:true, type:"json" })
  channelDetails: string;

  @ManyToOne((type) => Subscription, subscription => subscription.subscriptionOrders, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'subscription_id' })
  subscriptionId: Subscription;

  @OneToMany((type) => ChannelBillPlan, channelBillPlan => channelBillPlan.channelId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  channelBillPlans: ChannelBillPlan[];

//   @OneToOne(() => Payment)
//   @JoinColumn()
//   payment: Payment;
}