import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Course } from "./course";
import { Registration } from "./registration";


@Entity("students")
@Unique(["Id"])
export class Student extends EntityBase {
  @Column({ name: "name", nullable: true })
  name: string;

  @Column({ name: "age", nullable: true })
  age: string;
  
  @ManyToMany(() => Course)
    @JoinTable()
    courses: Course[];
    
  @OneToMany(
    (type) => Registration,
    (registration) => registration.studentId,
    {
      onDelete: "CASCADE",
      onUpdate: "RESTRICT",
    }
  )
  registrations: Registration[];

}
