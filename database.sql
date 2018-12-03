CREATE TABLE "teams" (
	"id" serial NOT NULL,
	"name" varchar(80) NOT NULL,
	"cal" varchar(1000) NOT NULL,
	"esea" varchar(160) ,
	"faceit" varchar(160) ,
	"cevo" varchar(160),
	"owner" int REFERENCES person(id),
	CONSTRAINT teams_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "maps" (
	"id" serial NOT NULL,
	"maps" varchar(40) NOT NULL,
	CONSTRAINT maps_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tactics" (
	"id" serial NOT NULL,
	"name" varchar(40) NOT NULL,
	"description" varchar(1000) NOT NULL,
	"map" int NOT NULL,
	"mini_url" varchar(140) NOT NULL,
	"team" int NOT NULL,
	CONSTRAINT tactics_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "players" (
	"id" serial NOT NULL,
	"alias" varchar(80),
	"first_name" varchar(80),
	"last_name" varchar(80),
	"dob" DATE,
	"team" int,
	"role" int,
	"esea" varchar(80),
	"faceit" varchar(80),
	"cevo" varchar(80),
	"image_url" varchar(160) DEFAULT 'https://i.imgur.com/jNNT4LE.png',
	"is_logged_in" BOOLEAN DEFAULT false ,
	"person_id" int REFERENCES person(id),
	CONSTRAINT players_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "roles" (
	"id" serial NOT NULL,
	"role" varchar(80) NOT NULL,
	CONSTRAINT roles_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Feedback" (
	"id" serial NOT NULL,
	"feedback" varchar(1000) NOT NULL,
	"sent_to" int NOT NULL,
	"sent_from" int NOT NULL,
	CONSTRAINT Feedback_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "events" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"event_start" TIME NOT NULL,
	"event_end" TIME NOT NULL,
	"description" varchar(1000) NOT NULL,
	"team" integer NOT NULL,
	"event_type" integer NOT NULL,
	CONSTRAINT Events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "event_types" (
	"id" serial NOT NULL,
	"event_type" varchar(10) NOT NULL,
	CONSTRAINT event_types_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);






ALTER TABLE "tactics" ADD CONSTRAINT "tactics_fk0" FOREIGN KEY ("map") REFERENCES "maps"("id");
ALTER TABLE "tactics" ADD CONSTRAINT "tactics_fk1" FOREIGN KEY ("team") REFERENCES "teams"("id");

ALTER TABLE "players" ADD CONSTRAINT "players_fk0" FOREIGN KEY ("team") REFERENCES "teams"("id");
ALTER TABLE "players" ADD CONSTRAINT "players_fk1" FOREIGN KEY ("role") REFERENCES "roles"("id");


ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_fk0" FOREIGN KEY ("sent_to") REFERENCES "players"("id");
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_fk1" FOREIGN KEY ("sent_from") REFERENCES "players"("id");

ALTER TABLE "events" ADD CONSTRAINT "events_fk0" FOREIGN KEY ("team") REFERENCES "teams"("id");
ALTER TABLE "events" ADD CONSTRAINT "events_fk1" FOREIGN KEY ("event_type") REFERENCES "event_types"("id");

-- INSERTING TEST DATA --

INSERT INTO "teams" (name,cal,esea) VALUES('Pure','<iframe src="https://calendar.google.com/calendar/embed?src=n5npuundh5ue8r61s2ocoa9uao%40group.calendar.google.com&ctz=America%2FChicago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>','https://play.esea.net/users/779198');

INSERT INTO "players" (alias, first_name, last_name, team) VALUES ('alias', 'first', 'Last', 1);

INSERT INTO "maps" (maps) VALUES ('Mirage'),('Cache'),('Dust2'),('Nuke'),('Overpass'),('Inferno'),('Train');

INSERT INTO "roles" (role) VALUES ('IGL'),('ENTRY'),('AWP'),('SUPPORT'),('RIFLER'),('HYBIRD');

INSERT INTO "event_types" (event_type) VALUES ('SCRIM'),('MATCH'),('LAN MATCH'),('PRACTICE'),('TOURNAMENT');

INSERT INTO "events" (name, start, end, description, team, event_type, date) VALUES('TestData','12:32','16:34','TestTestTestTestTest','2','2');

UPDATE players SET "alias"='caJ^-^', "first_name"='Christian', "last_name"='Johannes', "team"=1  WHERE id = 1;
SELECT * FROM "players" WHERE person_id = 1;