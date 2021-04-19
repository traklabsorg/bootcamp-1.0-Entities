import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Community } from "./communities";
import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";

@Entity("communityBills")
export class CommunityBills extends EntityBase{
    @Column({name:'communityId'})
    communityId:number;

    @Column({name:'bill_date'})
    billDate:Date;

    @Column({name:'title'})
    title:string;

    @Column({name:'description',nullable:true})
    description:string;

    @Column({name:'total_users'})
    totalUsers:number;

    @Column({name:'per_user_fee'})
    perUserFee:number;

    @Column({name:'tax'})
    tax:number;

    @Column({name:'total_charges'})
    totalCharges:number;

    @Column({name:'additional_details',type:"json"})
    additionalDetails:string;

    @Column({name:'is_paid'})
    isPaid:boolean;

    @Column({name:'invoice_url'})
    invoiceUrl:string;

    @ManyToOne((type)=>Community, community => community.Id,{
        onDelete:'CASCADE',onUpdate:'RESTRICT'
    })
    community:Community
}
