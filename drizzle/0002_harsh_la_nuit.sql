ALTER TABLE `analytics_events` ADD `medium` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `analytics_events` ADD `campaign` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `analytics_events` ADD `browser` text DEFAULT '其他' NOT NULL;--> statement-breakpoint
ALTER TABLE `analytics_events` ADD `operating_system` text DEFAULT '其他' NOT NULL;