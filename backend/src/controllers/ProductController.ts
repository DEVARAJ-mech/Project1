import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Product } from '../entities/Product';
import { AppDataSource } from '../data-source';

export class ProductController {
    private productRepository: Repository<Product>;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product);
    }

    // Get all products
    getAll = async (req: Request, res: Response): Promise<Response> => {
        try {
            const products = await this.productRepository.find();
            return res.json(products);
        } catch (error) {
            console.error('Error fetching products:', error);
            return res.status(500).json({ message: 'Error fetching products' });
        }
    };

    // Get product by ID
    getById = async (req: Request, res: Response): Promise<Response> => {
        const id = parseInt(req.params.id, 10);
        try {
            const product = await this.productRepository.findOneBy({ id });
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            return res.json(product);
        } catch (error) {
            console.error('Error fetching product:', error);
            return res.status(500).json({ message: 'Error fetching product' });
        }
    };

    // Create a new product
    create = async (req: Request, res: Response): Promise<Response> => {
        const { name, price, description, stock } = req.body;
        try {
            const newProduct = this.productRepository.create({
                name,
                price,
                description,
                stock,
            });
            const result = await this.productRepository.save(newProduct);
            return res.status(201).json(result);
        } catch (error) {
            console.error('Error creating product:', error);
            return res.status(500).json({ message: 'Error creating product' });
        }
    };

    // Update a product
    update = async (req: Request, res: Response): Promise<Response> => {
        const id = parseInt(req.params.id, 10);
        const { name, price, description, stock } = req.body;
        try {
            const product = await this.productRepository.findOneBy({ id });
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            product.name = name;
            product.price = price;
            product.description = description;
            product.stock = stock;

            const updatedProduct = await this.productRepository.save(product);
            return res.json(updatedProduct);
        } catch (error) {
            console.error('Error updating product:', error);
            return res.status(500).json({ message: 'Error updating product' });
        }
    };

    // Delete a product
    delete = async (req: Request, res: Response): Promise<Response> => {
        const id = parseInt(req.params.id, 10);
        try {
            const product = await this.productRepository.findOneBy({ id });
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            await this.productRepository.remove(product);
            return res.status(204).send();
        } catch (error) {
            console.error('Error deleting product:', error);
            return res.status(500).json({ message: 'Error deleting product' });
        }
    };
}
