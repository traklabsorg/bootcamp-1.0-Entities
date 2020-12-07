import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";

@Entity("plans")
export class Plan extends EntityBase{


  // @PrimaryGeneratedColumn() plan_id: number;
  
  @Column({ name: 'plan_name',nullable:true })
  planName: string;

  @Column({ name: 'plan_details',nullable:true , type:"json" })
  planDetails: string;

  @OneToMany((type) => ChannelBillPlan, channelBillPlans => channelBillPlans.planId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  channelBillPlans: ChannelBillPlan[]

  
}