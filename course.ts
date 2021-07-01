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
import { Registration } from "./registration";


@Entity("courses")
@Unique(["Id"])
export class Course extends EntityBase {
  @Column({ name: "course_name", nullable: true })
  courseName: string;

  @Column({ name: "duration", nullable: true })
  duration: string;

  @OneToMany(
    (type) => Registration,
    (registration) => registration.courseId,
    {
      onDelete: "CASCADE",
      onUpdate: "RESTRICT",
    }
  )
  registrations: Registration[];
}
