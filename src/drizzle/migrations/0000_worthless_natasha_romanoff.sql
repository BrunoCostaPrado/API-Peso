CREATE TABLE IF NOT EXISTS "weigh" (
	"id" text PRIMARY KEY NOT NULL,
	"date" text NOT NULL,
	"weigh" double precision NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
