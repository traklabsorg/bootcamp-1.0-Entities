import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany,OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";
import { Payment } from "./payment";
import { Subscription } from "./subscription";

@Entity("subscriptionOrder")
export class SubscriptionOrder extends EntityBase{

  @Column({ name: 'order_status',nullable:true })
  orderStatus: string;

  @Column({ name: 'order_date_time',nullable:true, default : Date.now() })
  orderDateTime: Date;

  @Column({ name: 'order_details',nullable:true, type:"json" })
  orderDetails: string;

  @Column({name: 'subscription_id', nullable:true})
  subscriptionId: number;

  @ManyToOne((type) => Subscription, subscription => subscription.subscriptionOrders, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'subscription_id' })
  subscription: Subscription;
}