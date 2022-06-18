"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var BookModel = require("./book").BookModel;
var BookProcesses = /** @class */ (function () {
    function BookProcesses() {
    }
    // 
    BookProcesses.prototype.getBooks = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel.find()];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    //  
    BookProcesses.prototype.getBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel.findById(req.query.id)];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 
    BookProcesses.prototype.editBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel.updateOne({ id: req.body.id }, req.body)];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 
    BookProcesses.prototype.createBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel.create(req.body)];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 
    BookProcesses.prototype.deleteBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BookModel.deleteOne({ id: req.query.id })];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    return BookProcesses;
}());
var BookProcess = new BookProcesses;
module.exports = { BookProcess: BookProcess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va0NvbnRyb2xsZXJzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYm9va0NvbnRyb2xsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBQSxTQUFTLEdBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFyQixDQUFxQjtBQUdyQztJQUNJO0lBQWMsQ0FBQztJQUNmLEdBQUc7SUFDSSxnQ0FBUSxHQUFkLFVBQWUsR0FBWSxFQUFDLEdBQWE7Ozs7OzRCQUV2QixxQkFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUEvQixNQUFNLEdBQUcsU0FBc0I7d0JBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7O0tBRWxCO0lBQ0YsSUFBSTtJQUNFLCtCQUFPLEdBQWIsVUFBYyxHQUFZLEVBQUMsR0FBYTs7Ozs7NEJBRXJCLHFCQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQS9DLE1BQU0sR0FBRyxTQUFzQzt3QkFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTs7Ozs7S0FFbkI7SUFDRCxHQUFHO0lBQ0csZ0NBQVEsR0FBZCxVQUFlLEdBQVksRUFBQyxHQUFhOzs7Ozs0QkFFdEIscUJBQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTdELE1BQU0sR0FBRyxTQUFvRDt3QkFDbkUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTs7Ozs7S0FFbkI7SUFDRCxHQUFHO0lBQ0csa0NBQVUsR0FBaEIsVUFBaUIsR0FBWSxFQUFDLEdBQWE7Ozs7OzRCQUd4QixxQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXpDLE1BQU0sR0FBRyxTQUFnQzt3QkFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTs7Ozs7S0FFbkI7SUFDRCxHQUFHO0lBQ0csa0NBQVUsR0FBaEIsVUFBaUIsR0FBWSxFQUFDLEdBQWE7Ozs7OzRCQUV2QixxQkFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBQTs7d0JBQXRELE1BQU0sR0FBSSxTQUE0Qzt3QkFDNUQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTs7Ozs7S0FFbkI7SUFFTCxvQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUFDRCxJQUFNLFdBQVcsR0FBRyxJQUFJLGFBQWEsQ0FBQTtBQUVyQyxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUMsV0FBVyxhQUFBLEVBQUMsQ0FBQSJ9