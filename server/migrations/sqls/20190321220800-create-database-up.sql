-- -----------------------------------------------------
-- Table "game"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "game" CASCADE;

CREATE TABLE "game" (
  "id" SERIAL NOT NULL ,
  "name" VARCHAR(200) NOT NULL,
  "name_visualization" VARCHAR(200) NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "platform"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "platform" CASCADE;

CREATE TABLE "platform" (
  "id" SERIAL NOT NULL ,
  "platform" VARCHAR(100) NOT NULL,
  "img" TEXT NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "player"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "player" CASCADE;

CREATE TABLE "player" (
  "id" SERIAL NOT NULL ,
  "name" VARCHAR(300) NOT NULL,
  "password" TEXT NOT NULL,
  "nickname" VARCHAR(40) NOT NULL,
  "public" BOOLEAN NOT NULL,
  "master" BOOLEAN NOT NULL,
  "email" VARCHAR(300) NULL,
  "avatar" TEXT NULL,
  "active" BOOLEAN NULL,
  "achievements_control" BOOLEAN NULL,
  PRIMARY KEY ("id")
  );


-- -----------------------------------------------------
-- Table "account"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "account" CASCADE;

CREATE TABLE "account" (
  "id" SERIAL NOT NULL ,
  "player_id" INT NOT NULL,
  "platform_id" INT NOT NULL,
  "account" VARCHAR(100) NOT NULL,
  "nickname" VARCHAR(200) NOT NULL,
  "link" TEXT NULL,
  "level" TEXT NULL,
  "points" INT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_account_platform1"
    FOREIGN KEY ("platform_id")
    REFERENCES "platform" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_account_player1"
    FOREIGN KEY ("player_id")
    REFERENCES "player" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "status"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "status" CASCADE;

CREATE TABLE "status" (
  "id" SERIAL NOT NULL ,
  "status" VARCHAR(200) NOT NULL,
  "blocked" BOOLEAN NOT NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "account_has_game"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "account_has_game" CASCADE;

CREATE TABLE "account_has_game" (
  "id" SERIAL NOT NULL ,
  "account_id" INT NOT NULL,
  "game_id" INT NOT NULL,
  "status_id" INT NOT NULL,
  "installed" BOOLEAN NOT NULL DEFAULT FALSE,
  "points" INT NULL,
  "achievements" INT NULL,
  "total_points" INT NULL,
  "total_achievements" INT NULL,
  "price" DECIMAL(10,2) NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_game_has_player_game1"
    FOREIGN KEY ("game_id")
    REFERENCES "game" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_game_has_player_account1"
    FOREIGN KEY ("account_id")
    REFERENCES "account" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_account_has_game_status1"
    FOREIGN KEY ("status_id")
    REFERENCES "status" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "achievements"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "achievements" CASCADE;

CREATE TABLE "achievements" (
  "id" SERIAL NOT NULL ,
  "account_has_game_id" INT NOT NULL,
  "description" VARCHAR(45) NOT NULL,
  "date_conclusion" TIMESTAMP NULL,
  "blocked" BOOLEAN NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_achievements_account_has_game1"
    FOREIGN KEY ("account_has_game_id")
    REFERENCES "account_has_game" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "genre"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "genre" CASCADE;

CREATE TABLE "genre" (
  "id" SERIAL NOT NULL ,
  "description" VARCHAR(100) NOT NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "game_has_genre"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "game_has_genre" CASCADE;

CREATE TABLE "game_has_genre" (
  "id" SERIAL NOT NULL ,
  "game_id" INT NOT NULL,
  "genre_id" INT NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_game_has_type_game1"
    FOREIGN KEY ("game_id")
    REFERENCES "game" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_game_has_type_type1"
    FOREIGN KEY ("genre_id")
    REFERENCES "genre" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "race_type"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "race_type" CASCADE;

CREATE TABLE "race_type" (
  "id" SERIAL NOT NULL ,
  "description" VARCHAR(100) NOT NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "race"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "race" CASCADE;

CREATE TABLE "race" (
  "id" SERIAL NOT NULL ,
  "account_has_game_id" INT NOT NULL,
  "race_type_id" INT NOT NULL,
  "started_date" TIMESTAMP NOT NULL,
  "date_prev_conclusion" TIMESTAMP NULL,
  "date_conclusion" TIMESTAMP NULL,
  "observation" TEXT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_race_race_type1"
    FOREIGN KEY ("race_type_id")
    REFERENCES "race_type" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_race_account_has_game1"
    FOREIGN KEY ("account_has_game_id")
    REFERENCES "account_has_game" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "ticket"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "ticket" CASCADE;

CREATE TABLE "ticket" (
  "id" SERIAL NOT NULL ,
  "player_id" INT NOT NULL,
  "type" INT NOT NULL,
  "info" TEXT NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_ticket_player1"
    FOREIGN KEY ("player_id")
    REFERENCES "player" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
