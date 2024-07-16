import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderItemOrderItem extends Schema.Component {
  collectionName: 'components_order_item_order_items';
  info: {
    displayName: 'orderItem';
  };
  attributes: {
    quantity: Attribute.Integer;
    ad_id: Attribute.Integer;
    category: Attribute.Enumeration<
      ['Cabs', 'Buses', 'Hoardings', 'Railways', 'Bins']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order-item.order-item': OrderItemOrderItem;
    }
  }
}
