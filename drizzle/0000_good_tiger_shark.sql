CREATE TABLE `inquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`contact` text NOT NULL,
	`wechat` text DEFAULT '' NOT NULL,
	`source` text DEFAULT '' NOT NULL,
	`arrival_city` text DEFAULT '' NOT NULL,
	`return_city` text DEFAULT '' NOT NULL,
	`destinations` text DEFAULT '' NOT NULL,
	`travel_date` text DEFAULT '' NOT NULL,
	`days` text DEFAULT '' NOT NULL,
	`adults` integer DEFAULT 1 NOT NULL,
	`children` integer DEFAULT 0 NOT NULL,
	`group_type` text DEFAULT '' NOT NULL,
	`travel_type` text DEFAULT '' NOT NULL,
	`hotel_level` text DEFAULT '' NOT NULL,
	`room_type` text DEFAULT '' NOT NULL,
	`rooms` text DEFAULT '' NOT NULL,
	`vehicle` text DEFAULT '' NOT NULL,
	`budget` text DEFAULT '' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`admin_note` text DEFAULT '' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `site_settings` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text DEFAULT '' NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
