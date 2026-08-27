CREATE TABLE `enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`claim_type` text DEFAULT '' NOT NULL,
	`message` text DEFAULT '' NOT NULL,
	`source` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `enquiries_status_idx` ON `enquiries` (`status`);--> statement-breakpoint
CREATE INDEX `enquiries_created_at_idx` ON `enquiries` (`created_at`);