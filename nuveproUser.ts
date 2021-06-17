import { json } from "body-parser";
import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PaymentCoupon } from "./paymentCoupon";
import { SubscriptionOrder } from "./subscriptionOrder";
import { User } from "./user";

@Entity("nuveprouser")
export class NuveproUser extends EntityBase {
  @Column({ name: "nuvepro_id", nullable: false })
  nuveproId: number;

  @Column({ name: "login_id", nullable: false })
  loginId: string;

  @Column({ name: "passoword", nullable: false })
  password: string;

  @Column({ name: "team_ids", nullable: true })
  teamIds: string[];

  @Column({ name: "subscriptions", nullable: true, type: "json" })
  subscriptions: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  userId: SubscriptionOrder;
}
