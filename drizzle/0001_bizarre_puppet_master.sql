CREATE TABLE `enquiry_activity` (
	`id` text PRIMARY KEY NOT NULL,
	`enquiry_id` text NOT NULL,
	`kind` text NOT NULL,
	`content` text DEFAULT '' NOT NULL,
	`from_status` text,
	`to_status` text,
	`actor_email` text,
	`actor_name` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`enquiry_id`) REFERENCES `enquiries`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `enquiry_activity_enquiry_idx` ON `enquiry_activity` (`enquiry_id`);--> statement-breakpoint
CREATE INDEX `enquiry_activity_created_at_idx` ON `enquiry_activity` (`created_at`);