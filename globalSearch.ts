import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity } from "typeorm";
import { Exclude } from "class-transformer";

@Entity("channels")
@Exclude()
export class GlobalSearch extends EntityBase {
  @Exclude()
  @Column({ name: "field_id", nullable: true })
  fieldId: string;
  @Exclude()
  @Column({ name: "field_type", nullable: true })
  fieldType: string;
  @Exclude()
  @Column({ name: "field_value", nullable: true })
  fieldValue: string;
  @Exclude()
  @Column({ name: "additional_details", nullable: true, type: "json" })
  additionalDetails: string;
}
