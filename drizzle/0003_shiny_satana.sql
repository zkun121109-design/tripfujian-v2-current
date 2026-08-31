ALTER TABLE `inquiries` ADD `attribution_source` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiries` ADD `attribution_medium` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiries` ADD `attribution_campaign` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiries` ADD `landing_page` text DEFAULT '' NOT NULL;