import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LessonData } from "./lessonData";
import { User } from "./user";
import { Channel } from "./channel";

@Entity("lessonDataUsers")
export class LessonDataUser extends EntityBase{

  @Column({ name: 'additional_details', nullable: true , type:"json" })
  additonalDetails: string;

  @Column({ name: 'user_id',nullable:false})
  userId: number;

  @Column({ name: 'lesson_data_id',nullable:false})
  contentId: number;

  @ManyToOne((type) => User, user => user.lessonDataUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne((type) => Channel, channel => channel.lessonDataUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  channel: Channel;

  @ManyToOne((type) => LessonData, lessonData => lessonData.lessonDataUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'lesson_data_id' })
  lessonData: LessonData;

}