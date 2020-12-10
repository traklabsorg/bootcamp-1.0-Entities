import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LessonData } from "./lessonData";
import { User } from "./user";

@Entity("lessonDataUsers")
export class LessonDataUser extends EntityBase{

  @Column({ name: 'additional_details', nullable: true , type:"json" })
  additonalDetails: string;

  @Column({ name: 'user_id',nullable:false})
  userId: number;

  @Column({ name: 'meeting_provider_id',nullable:false})
  contentId: number;

  @ManyToOne((type) => User, user => user.lessonDataUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne((type) => LessonData, lessonData => lessonData.lessonDataUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'content_id' })
  content: LessonData;

}