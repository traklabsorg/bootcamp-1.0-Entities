import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";

@Entity("plans")
@Unique(["planName"])
export class Plan extends EntityBase{

  @Column({ name: 'plan_name',nullable:true })
  planName: string;

  @Column({ name: 'plan_details',nullable:true , type:"json" })
  planDetails: string;

  @Column({ name: 'plan_default_price',nullable:true })
  planDefaultPrice: string;

  @Column({ name: 'plan_currency',nullable:true })
  planCurrency: string;

  @OneToMany((type) => ChannelBillPlan, channelBillPlans => channelBillPlans.plan, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  channelBillPlan: ChannelBillPlan[];

}