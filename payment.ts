import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany,OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PaymentCoupon } from "./paymentCoupon";
import { SubscriptionOrder } from "./subscriptionOrder";
import { User } from "./user";

@Entity("payments")
export class Payment extends EntityBase{

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @Column({ name: 'payment_status',nullable:true })
  paymentStatus: string;

  @Column({ name: 'payment_method',nullable:true })
  paymentMethod: string;

  @Column({ name: 'payment_currency',nullable:true })
  paymentCurrency: string;

  @Column({ name: 'payment_amount',nullable:true })
  paymentAmount: number;

  @Column({ name: 'transaction_date_time',nullable:true, type: "timestamp" })
  transactionDateTime: Date;

  @Column({ name: 'payment_details',nullable:true, type: "json" })
  paymentDetails: string;

  @Column({name: 'subscription_order_id', nullable:true})
  subscriptionOrderId: number;

  @Column("int",{name: 'coupon_ids', nullable:true, array:true})
  couponIds: number[];
 
  @OneToOne(() => SubscriptionOrder)
  @JoinColumn({name: 'subscription_order_id'})
  subscriptionOrder: SubscriptionOrder;

  @OneToMany((type) => PaymentCoupon, paymentCoupon => paymentCoupon.payment, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  paymentCoupons: PaymentCoupon[]

  @ManyToOne((type) => User, user => user.payments, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user : User;
}