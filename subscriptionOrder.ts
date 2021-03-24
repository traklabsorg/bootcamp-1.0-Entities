import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";
import { Payment } from "./payment";
import { Subscription } from "./subscription";
import { User } from "./user";

@Entity("subscriptionOrders")
export class SubscriptionOrder extends EntityBase {

  @Column({ name: 'order_status', nullable: true })
  orderStatus: string;

  // @Column({ name: 'order_date_time',nullable:true })
  @Column({ name: 'order_date_time', nullable: true, type: "timestamp with time zone" })
  orderDateTime: Date;

  @Column({ name: 'order_details', nullable: true, type: "json" })
  orderDetails: string;

  @Column({ name: 'subscription_id', nullable: true })
  subscriptionId: number;

  @ManyToOne((type) => Subscription, subscription => subscription.subscriptionOrder, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })

  @JoinColumn({ name: 'subscription_id' })
  subscription: Subscription;

  @OneToOne(() => Payment)
  @JoinColumn({ name: 'payment_id' })
  payment: Payment;

  @ManyToOne((type) => User, user => user.subscriptionOrder, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })

  @JoinColumn({ name: 'user_id' })
  user: User;
}