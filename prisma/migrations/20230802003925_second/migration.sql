/*
  Warnings:

  - You are about to drop the `InitialInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `user` on the `User` table. All the data in the column will be lost.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allergy` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `center_treatment` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chronic_ill` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_diagnosis` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_dialysis_start` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_treatment` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dialysis_access` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dialysis_per_week` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dialysis_type` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergency_contact` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `have_allergy` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `have_chronic_ill` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `have_surgery` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hours_per_session` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kidney_disease` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kidney_stage` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medication` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other_treatment` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prev_med_conditions` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surgery_kind` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treatment_along` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "InitialInfo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Control" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "date_last_dialysis" TEXT NOT NULL,
    "have_symtomps_after_dial" TEXT NOT NULL,
    "symtomps_after_dial" TEXT NOT NULL,
    "have_disease_after_dial" TEXT NOT NULL,
    "disease_after_dial" TEXT NOT NULL,
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

-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "surgery_kind" TEXT NOT NULL,
    "have_allergy" TEXT NOT NULL,
    "allergy" TEXT NOT NULL,
    "have_chronic_ill" TEXT NOT NULL,
    "chronic_ill" TEXT NOT NULL,
    "medication" TEXT NOT NULL,
    "date_diagnosis" DATETIME NOT NULL,
    "date_treatment" DATETIME NOT NULL,
    "treatment_along" TEXT NOT NULL,
    "other_treatment" TEXT NOT NULL,
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
INSERT INTO "new_User" ("createdAt", "id", "password", "updateAt") SELECT "createdAt", "id", "password", "updateAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
