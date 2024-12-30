import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: 'text'})
    name: string | undefined;

    @Column({ type: 'text', nullable: true }) // Optional description
    description?: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 }) // Precision for monetary values
    price: number | undefined;

    @Column({ type: 'integer' }) // Stock as an integer
    stock: number | undefined;

    @Column({ type: 'boolean', default: true }) // Default isActive to true
    isActive: boolean | undefined;
}
