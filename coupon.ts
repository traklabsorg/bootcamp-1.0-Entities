import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PaymentCoupon } from "./paymentCoupon";


@Entity("coupons")
export class Coupon extends EntityBase{

  @Column({ name: 'couponCode',nullable:true})
  couponCode: string;

  @Column({ name: 'valid_till',nullable:true, type: "timestamp"})
  validTill: Date;

  @Column({ name: 'usage_count',nullable:true })
  usageCount: number;

  @Column({ name: 'description',nullable:true })
  description: string;

  @Column({ name: 'usage_limit',nullable:true })
  usageLimit: number;

  @Column({ name: 'coupon_type',nullable:true })
  couponType: string;

  @Column({ name: 'is_active',nullable:true })
  isActive: boolean;

  @Column({ name: 'coupon_details',nullable:true, type: "json" })
  couponDetails: string;

  @OneToMany((type) => PaymentCoupon, paymentCoupon => paymentCoupon.coupon, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  paymentCoupons: PaymentCoupon[]
  
}