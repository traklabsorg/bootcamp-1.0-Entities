import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Coupon } from "./coupon";
import { Group } from "./group";
import { Payment } from "./payment";

@Entity("paymentCoupons")
export class PaymentCoupon extends EntityBase{

  @Column({ name: 'payment_coupon_details',nullable:true, type:"json" })
  paymentCouponDetails: string;

  @Column({name: 'payment_id', nullable:false})
  paymentId: number;

  @Column({name: 'coupon_id', nullable:false})
  couponId: number;

  @ManyToOne((type) => Coupon, coupon => coupon.paymentCoupon, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'coupon_id' })
  coupon: Coupon;

  @ManyToOne((type) => Payment, payment => payment.paymentCoupon, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'payment_id' })
  payment: Payment;

}