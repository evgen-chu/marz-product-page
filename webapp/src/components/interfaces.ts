import { ReactElement } from 'react';
import type { DraggableProvided } from 'react-beautiful-dnd';
import { DATA_STATES } from './enums';

export interface Order {
    OrderID: number;
    CustomerID: number;
    ProductID: number;
    OrderStatus: string;
}

export interface OrderData {
  Queued: Order[],
  InProgress: Order[],
  QA: Order[],
}

export interface ProductData {
    products: Product[];
  }

export interface DraggableItemProps extends Order{
    draggableProvided: DraggableProvided;
    removeOrder: (order: Order) => void;
}

export interface DraggableListProps {
    ID: string;
    listTitle: string;
    removeOrder: (order: Order) => void;
    items: Order[];
};

export interface HeaderLink {
    label: string;
    url: string;
}

export interface HeaderProps {
    links: HeaderLink[];
}

export interface Product {
    ProductID: number;
    ProductName: string;
    ProductPhotoURL: string;
    ProductStatus: string;
}

export interface ProductItemProps {
    product: Product;
};

export interface ProductItemListProps {
    products: Product[];
}

export interface PageContentProps {
    loadingState: DATA_STATES;
    content: ReactElement;
};
