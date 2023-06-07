"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurePetcareLockState = exports.SurePetcarePositionWhere = void 0;
var SurePetcarePositionWhere;
(function (SurePetcarePositionWhere) {
    SurePetcarePositionWhere[SurePetcarePositionWhere["Unknown"] = 0] = "Unknown";
    SurePetcarePositionWhere[SurePetcarePositionWhere["Inside"] = 1] = "Inside";
    SurePetcarePositionWhere[SurePetcarePositionWhere["Outside"] = 2] = "Outside";
})(SurePetcarePositionWhere = exports.SurePetcarePositionWhere || (exports.SurePetcarePositionWhere = {}));
var SurePetcareLockState;
(function (SurePetcareLockState) {
    SurePetcareLockState[SurePetcareLockState["Unlocked"] = 0] = "Unlocked";
    SurePetcareLockState[SurePetcareLockState["LockPetsIn"] = 1] = "LockPetsIn";
    SurePetcareLockState[SurePetcareLockState["LockPetsOut"] = 2] = "LockPetsOut";
    SurePetcareLockState[SurePetcareLockState["LockBothWays"] = 3] = "LockBothWays";
})(SurePetcareLockState = exports.SurePetcareLockState || (exports.SurePetcareLockState = {}));
