import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Community } from "./communities";
import { Group } from "./group";

@Entity("communityCards")
export class CommunityCard extends EntityBase {

  @Column({ name: 'additional_data', nullable: true, type: "json" })
  additionalData: string;

  @Column({ name: 'name_on_card', nullable: true })
  nameOnCard: string;

  @Column({ name: 'is_active', nullable: true })
  isActive: boolean;

  @Column({ name: 'card_type', nullable: true })
  cardType: string;

  @Column({ name: 'card_number', nullable: true })
  cardNumber: string;

  @Column({ name: 'expiry_date', nullable: true })
  expiryDate: string;

  @Column({ name: 'cvv', nullable: true })
  cvv: string;

  @Column({ name: 'card_image', nullable: true })
  cardImage: string;

  @Column({ name: 'community_id', nullable: true })
  communityId: number;

@Column({name:'is_default'})
isDefault:boolean  

  @ManyToOne((type) => Community, community => community.communityCard, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })

  @JoinColumn({ name: 'community_id' })
  community: Community;

}