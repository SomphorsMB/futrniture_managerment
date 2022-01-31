import { Module } from '@nestjs/common';
import 'dotenv/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ProductSuppliersModule } from './product-suppliers/product-suppliers.module';
import { ProductSupplier } from './product-suppliers/entities/product-supplier.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { SellersModule } from './sellers/sellers.module';
import { Seller } from './sellers/entities/seller.entity';
import { ProductSoldsModule } from './product-solds/product-solds.module';
import { ProductSold } from './product-solds/entities/product-sold.entity';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    timezone: process.env.DB_Time,
    synchronize: true,
    entities: [User, ProductSupplier, Product,Category,Seller,ProductSold],
  }), UsersModule, ProductSuppliersModule, ProductsModule,CategoriesModule, SellersModule,SellersModule, ProductSoldsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
