ALTER TABLE "public"."order_items" ADD COLUMN "product_id" uuid NOT NULL , ADD CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products" ("id") ON UPDATE restrict ON DELETE restrict;