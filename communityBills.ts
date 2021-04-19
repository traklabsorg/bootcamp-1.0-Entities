import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Community } from "./communities";
import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";

@Entity("communityBills")
export class CommunityBills extends EntityBase{
    @Column({name:'communityId',nullable:true})
    communityId:number;

    @Column({name:'bill_date',nullable:true})
    billDate:Date;

    @Column({name:'title',nullable:true})
    title:string;

    @Column({name:'description',nullable:true})
    description:string;

    @Column({name:'total_users',nullable:true})
    totalUsers:number;

    @Column({name:'per_user_fee',nullable:true})
    perUserFee:number;

    @Column({name:'tax',nullable:true})
    tax:number;

    @Column({name:'total_charges',nullable:true})
    totalCharges:number;

    @Column({name:'additional_details',type:"json",nullable:true})
    additionalDetails:string;

    @Column({name:'is_paid',nullable:true})
    isPaid:boolean;

    @Column({name:'invoice_url',nullable:true})
    invoiceUrl:string;

    @ManyToOne((type)=>Community, community => community.Id,{
        onDelete:'CASCADE',onUpdate:'RESTRICT'
    })
    community:Community
}
