"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ProductSoldsController = void 0;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../../../../../../../../src/auth/jwt-auth.guard");
var role_guard_1 = require("../../../../../../../../src/authorization/role.guard");
var role_decorator_1 = require("../../../../../../../../src/authorization/role.decorator");
var role_enum_1 = require("../../../../../../../../src/authorization/role.enum");
var ProductSoldsController = /** @class */ (function () {
    function ProductSoldsController(productSoldsService) {
        this.productSoldsService = productSoldsService;
    }
    ProductSoldsController.prototype.createProductSold = function (createProductSoldDto, res) {
        this.productSoldsService.create(createProductSoldDto).then(function () {
            return res.status(201).json({ message: "Product sold created successfully!" });
        })["catch"](function (error) {
            return res.set(500).json({
                message: "Something went wrong!",
                ProductSold: error
            });
        });
    };
    ProductSoldsController.prototype.findAllProductSold = function (res) {
        this.productSoldsService.findAll().then(function (result) {
            return res.status(200).json(result);
        })["catch"](function (error) {
            return res.status(500).json(error);
        });
    };
    ProductSoldsController.prototype.findOneProductSold = function (id, res) {
        this.productSoldsService.findOne(+id).then(function (result) {
            if (result) {
                return res.status(200).json({ result: result });
            }
            else {
                return res.status(404).json({ message: 'Product sold not found!' });
            }
        })["catch"](function (error) {
            res.status(500).json({ message: 'Something went wrong!', error: error });
        });
    };
    ProductSoldsController.prototype.updateProductSold = function (id, updateProductSoldDto, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.productSoldsService.findOne(+id).then(function (result) {
                    if (result) {
                        _this.productSoldsService.update(+id, updateProductSoldDto).then(function () {
                            return res.status(201).json({ message: 'Updated product sold successfully!' });
                        })["catch"](function (error) {
                            return res.status(500).json({
                                message: 'Something went wrong!',
                                error: error
                            });
                        });
                    }
                    else {
                        return res.status(404).json({ message: 'Product sold not found!' });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ProductSoldsController.prototype.removeProductSold = function (id, res) {
        var _this = this;
        this.productSoldsService.findOne(+id).then(function (result) {
            if (result) {
                _this.productSoldsService.remove(+id).then(function () {
                    return res.status(201).json({ message: 'Deleted Product sold successfully!' });
                })["catch"](function (error) {
                    return res.status(500).json({
                        message: 'Something went wrong!',
                        error: error
                    });
                });
            }
            else {
                return res.status(404).json({ message: 'Product sold not found!' });
            }
        });
    };
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER, role_enum_1.Role.SELLER),
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Res)())
    ], ProductSoldsController.prototype, "createProductSold");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER, role_enum_1.Role.SELLER),
        (0, common_1.Get)(),
        __param(0, (0, common_1.Res)())
    ], ProductSoldsController.prototype, "findAllProductSold");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER, role_enum_1.Role.SELLER),
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Res)())
    ], ProductSoldsController.prototype, "findOneProductSold");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __param(2, (0, common_1.Res)())
    ], ProductSoldsController.prototype, "updateProductSold");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Res)())
    ], ProductSoldsController.prototype, "removeProductSold");
    ProductSoldsController = __decorate([
        (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
        (0, common_1.Controller)('product-solds')
    ], ProductSoldsController);
    return ProductSoldsController;
}());
exports.ProductSoldsController = ProductSoldsController;