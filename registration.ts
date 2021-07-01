import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";


@Entity("registrations")
@Unique(["Id"])
export class Registration extends EntityBase {
  @Column({ name: "registration_date", nullable: false })
  registrationDate: string;

  @Column({ name: "student_id", nullable: false })
  studentId: number;

  @Column({ name: "course_id", nullable: false })
  courseId: number;

  
}