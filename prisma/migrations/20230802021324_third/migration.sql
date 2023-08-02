-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Control" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "date_last_dialysis" TEXT NOT NULL,
    "have_symtomps_after_dial" TEXT NOT NULL,
    "symtomps_after_dial" TEXT,
    "have_disease_after_dial" TEXT NOT NULL,
    "disease_after_dial" TEXT,
    "syst_press" REAL NOT NULL,
    "dias_press" REAL NOT NULL,
    "oxi_sat" REAL NOT NULL,
    "kt_v" REAL NOT NULL,
    "urr" REAL NOT NULL,
    "sodium" INTEGER NOT NULL,
    "bun" REAL NOT NULL,
    "creatinine" REAL NOT NULL,
    "ferritin" INTEGER NOT NULL,
    "iron_saturation" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Control" ("bun", "createdAt", "creatinine", "date_last_dialysis", "dias_press", "disease_after_dial", "ferritin", "have_disease_after_dial", "have_symtomps_after_dial", "id", "iron_saturation", "kt_v", "oxi_sat", "sodium", "symtomps_after_dial", "syst_press", "updateAt", "urr", "user_id") SELECT "bun", "createdAt", "creatinine", "date_last_dialysis", "dias_press", "disease_after_dial", "ferritin", "have_disease_after_dial", "have_symtomps_after_dial", "id", "iron_saturation", "kt_v", "oxi_sat", "sodium", "symtomps_after_dial", "syst_press", "updateAt", "urr", "user_id" FROM "Control";
DROP TABLE "Control";
ALTER TABLE "new_Control" RENAME TO "Control";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "height" REAL NOT NULL,
    "emergency_contact" TEXT NOT NULL,
    "prev_med_conditions" TEXT NOT NULL,
    "have_surgery" TEXT NOT NULL,
    "surgery_kind" TEXT,
    "have_allergy" TEXT NOT NULL,
    "allergy" TEXT,
    "have_chronic_ill" TEXT NOT NULL,
    "chronic_ill" TEXT,
    "medication" TEXT NOT NULL,
    "date_diagnosis" DATETIME NOT NULL,
    "date_treatment" DATETIME NOT NULL,
    "treatment_along" TEXT NOT NULL,
    "other_treatment" TEXT,
    "kidney_disease" TEXT NOT NULL,
    "kidney_stage" TEXT NOT NULL,
    "dialysis_type" TEXT NOT NULL,
    "date_dialysis_start" DATETIME NOT NULL,
    "dialysis_per_week" INTEGER NOT NULL,
    "hours_per_session" INTEGER NOT NULL,
    "dialysis_access" TEXT NOT NULL,
    "center_treatment" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("age", "allergy", "center_treatment", "chronic_ill", "createdAt", "date_diagnosis", "date_dialysis_start", "date_treatment", "dialysis_access", "dialysis_per_week", "dialysis_type", "email", "emergency_contact", "gender", "have_allergy", "have_chronic_ill", "have_surgery", "height", "hours_per_session", "id", "kidney_disease", "kidney_stage", "medication", "name", "other_treatment", "password", "prev_med_conditions", "surgery_kind", "treatment_along", "updateAt", "weight") SELECT "age", "allergy", "center_treatment", "chronic_ill", "createdAt", "date_diagnosis", "date_dialysis_start", "date_treatment", "dialysis_access", "dialysis_per_week", "dialysis_type", "email", "emergency_contact", "gender", "have_allergy", "have_chronic_ill", "have_surgery", "height", "hours_per_session", "id", "kidney_disease", "kidney_stage", "medication", "name", "other_treatment", "password", "prev_med_conditions", "surgery_kind", "treatment_along", "updateAt", "weight" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
