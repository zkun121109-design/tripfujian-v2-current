CREATE TABLE `analytics_events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`visitor_hash` text NOT NULL,
	`path` text NOT NULL,
	`country` text DEFAULT '未知' NOT NULL,
	`device` text DEFAULT '其他' NOT NULL,
	`source` text DEFAULT '直接访问' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_analytics_created` ON `analytics_events` (`created_at`);