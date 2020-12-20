import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Coupon } from "./coupon";
import { Group } from "./group";
import { Payment } from "./payment";

@Entity("paymentCoupon")
export class PaymentCoupon extends EntityBase{

  @Column({ name: 'payment_coupon_details',nullable:true, type:"json" })
  paymentCouponDetails: string;

  @Column({name: 'payment_id', nullable:false})
  paymentId: number;

  @Column({name: 'coupon_id', nullable:false})
  couponId: number;

  @ManyToOne((type) => Coupon, coupon => coupon.paymentCoupons, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'coupon_id' })
  coupon: Coupon;

  @ManyToOne((type) => Payment, payment => payment.paymentCoupons, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'payment_id' })
  payment: Payment;

}