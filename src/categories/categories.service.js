"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CategoriesService = void 0;
var common_1 = require("@nestjs/common");
var product_detail_entity_1 = require("../../../../../../../../src/product-details/entities/product-detail.entity");
var product_supplier_entity_1 = require("../../../../../../../../src/product-suppliers/entities/product-supplier.entity");
var product_entity_1 = require("../../../../../../../../src/products/entities/product.entity");
var update_category_dto_1 = require("./dto/update-category.dto");
var category_entity_1 = require("./entities/category.entity");
var CategoriesService = /** @class */ (function () {
    function CategoriesService(_categoryRepository) {
        this._categoryRepository = _categoryRepository;
    }
    CategoriesService.prototype.create = function (createCategoryDto) {
        return this._categoryRepository
            .createQueryBuilder()
            .insert()
            .values(__assign({}, createCategoryDto))
            .execute();
    };
    CategoriesService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._categoryRepository.createQueryBuilder('category')
                            .leftJoinAndMapMany('category.products', product_entity_1.Product, 'product', 'product.categoryId = category.id')
                            .leftJoinAndMapMany('product.detail', product_detail_entity_1.ProductDetail, 'productDetail', 'product.id = productDetail.productId')
                            .leftJoinAndMapMany('productDetail.supplier', product_supplier_entity_1.ProductSupplier, 'supplier', 'productDetail.supplierId = supplier.id')
                            .getMany()];
                    case 1:
                        categories = _a.sent();
                        return [2 /*return*/, categories];
                }
            });
        });
    };
    CategoriesService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._categoryRepository.createQueryBuilder('category')
                            .leftJoinAndMapMany('category.products', product_entity_1.Product, 'product', 'product.categoryId = category.id')
                            .leftJoinAndMapMany('product.detail', product_detail_entity_1.ProductDetail, 'productDetail', 'product.id = productDetail.productId')
                            .leftJoinAndMapMany('productDetail.supplier', product_supplier_entity_1.ProductSupplier, 'supplier', 'productDetail.supplierId = supplier.id')
                            .where('category.id=:id', { id: id })
                            .getOne()];
                    case 1:
                        category = _a.sent();
                        return [2 /*return*/, category];
                }
            });
        });
    };
    CategoriesService.prototype.update = function (id, updateCategoryDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._categoryRepository.createQueryBuilder()
                        .update(new update_category_dto_1.UpdateCategoryDto)
                        .set(__assign({}, updateCategoryDto))
                        .where("id=:id", { id: id })
                        .execute()];
            });
        });
    };
    CategoriesService.prototype.remove = function (id) {
        return this._categoryRepository.createQueryBuilder()["delete"]()
            .from(category_entity_1.Category)
            .where('id=:id', { id: id })
            .execute();
    };
    CategoriesService.prototype.checkCategory = function (name) {
        return this._categoryRepository
            .createQueryBuilder()
            .select()
            .where('name=:name', { name: name })
            .getOne();
    };
    CategoriesService = __decorate([
        (0, common_1.Injectable)()
    ], CategoriesService);
    return CategoriesService;
}());
exports.CategoriesService = CategoriesService;
