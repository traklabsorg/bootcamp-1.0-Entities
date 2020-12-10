import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany,OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PaymentCoupon } from "./paymentCoupon";
import { SubscriptionOrder } from "./subscriptionOrder";

@Entity("payment")
export class Payment extends EntityBase{

  @Column({ name: 'payment_status',nullable:true })
  paymentStatus: string;

  @Column({ name: 'payment_method',nullable:true })
  paymentMethod: string;

  @Column({ name: 'payment_currency',nullable:true })
  paymentCurrency: string;

  @Column({ name: 'payment_amount',nullable:true })
  paymentAmount: number;

  @Column({ name: 'transaction_date_time',nullable:true, default: Date.now(), type: "timestamp" })
  transactionDateTime: Date;

  @Column({ name: 'payment_details',nullable:true, type: "json" })
  paymentDetails: string;

  @Column({name: 'subscription_order_id', nullable:true})
  subscriptionOrderId: number;
 
  @OneToOne(() => SubscriptionOrder)
  @JoinColumn({name: 'subscription_order_id'})
  subscriptionOrder: SubscriptionOrder;

  @OneToMany((type) => PaymentCoupon, paymentCoupon => paymentCoupon.payment, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  paymentCoupons: PaymentCoupon[]
}