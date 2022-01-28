import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductSuppliersService } from './product-suppliers.service';
import { CreateProductSupplierDto } from './dto/create-product-supplier.dto';
import { UpdateProductSupplierDto } from './dto/update-product-supplier.dto';
import { Response } from 'express';

@Controller('product-suppliers')
export class ProductSuppliersController {
  constructor(private readonly productSuppliersService: ProductSuppliersService) {}

  @Post()
  create(@Body() createProductSupplierDto: CreateProductSupplierDto, @Res() res: Response) {
    this.productSuppliersService.create(createProductSupplierDto).then(result => {
        res.status(201).json({
          message: "Created Sucessfully"
        })
    }).catch(error => {
      res.status(500).json({
        message: "Something went wrong",
        error: error
      });
    });
  }

  @Get()
  findAll( @Res() res: Response) {
    return this.productSuppliersService.findAll().then(result => {
      res.status(200).json({
        data: result
      })
    }).catch(error=> {
      res.status(500).json({
        message: "Something went wrong",
        error: error
      });
    });;
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    this.productSuppliersService.findOne(+id).then(result => {
      if(result){
        res.status(200).json(result);
    }else {
        return res.status(404).json({
            message: "Product_Supplier not found!"
        });
    }
    }).catch(error => {
      res.status(500).json({
          message: "Something went wrong!",
          error: error
      })
  });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductSupplierDto: UpdateProductSupplierDto, @Res() res: Response) {
    this.productSuppliersService.findOne(+id).then(result => {
      if (result){
        this.productSuppliersService.update(+id, updateProductSupplierDto).then(() => {
          res.status(201).json({
            message: "Updated Successfully"
          })
        }).catch(error => {
          res.status(500).json({
              message: "Something went wrong",
              error: error
          })
      });
      }else{
        return res.status(404).json({
          message: "Product_Supplier not found!"
      });
      }
    })
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    this.productSuppliersService.findOne(+id).then(result => {
      if (result){
        this.productSuppliersService.remove(+id).then(() => {
          res.status(201).json({
            message: "Deleted Successfully"
          })
        }).catch(error => {
          res.status(500).json({
              message: "Something went wrong",
              error: error
          })
      });
      }else{
        return res.status(404).json({
          message: "Product_Supplier not found!"
      });
      }
    })
  }
}