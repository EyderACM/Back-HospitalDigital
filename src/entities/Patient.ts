import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import {
  IsDateString,
  isDefined,
  IsDefined,
  IsInt,
  Max,
  Min,
} from "class-validator";
import { Type } from "class-transformer";
import { Hospital } from "./Hospital";
import { Guardian } from "./Guardian";

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDefined()
  first_name: string;

  @Column()
  @IsDefined()
  last_name: string;

  @Column()
  @IsDefined()
  @IsInt()
  @Min(0)
  @Max(100)
  age: number;

  @Column()
  @IsDefined()
  sex: string;

  @Column({ type: "date" })
  @Type(() => Date)
  @IsDateString()
  @IsDefined()
  birth_date: Date;

  @Column()
  @IsDefined()
  city_name: string;

  @ManyToOne(() => Hospital, (hospital) => hospital.patients)
  @IsDefined()
  @JoinColumn({
    name: "hospital_id",
  })
  hospital: Hospital;

  @OneToOne(() => Guardian)
  @IsDefined()
  @JoinColumn({
    name: "guardian_id",
  })
  guardian: Guardian;

  @Column({
    default: true,
    name: "active",
  })
  is_active: boolean;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date;
}
