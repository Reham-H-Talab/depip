import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  stock: number;
  rating: number;
  reviews: number;
  status: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  searchQuery: string = '';
  selectedCategory: string = 'All';

  categories: string[] = ['All', 'Vitamins', 'Pain Relief', 'Cold & Flu', 'Baby', 'Eye Care', 'First Aid'];

  products: Product[] = [
    { id: 1, name: 'Vitamin D3 + K2 2000IU', brand: 'NutriCare', category: 'Vitamins', price: 18.99, oldPrice: 24.99, stock: 148, rating: 4.8, reviews: 312, status: 'In Stock', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=80&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Omega-3 Fish Oil 1000mg', brand: 'PureHealth', category: 'Vitamins', price: 22.49, stock: 72, rating: 4.6, reviews: 198, status: 'In Stock', image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=80&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Ibuprofen 400mg Tablets', brand: 'MediRelief', category: 'Pain Relief', price: 8.99, stock: 6, rating: 4.7, reviews: 540, status: 'In Stock', image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=80&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Paracetamol 500mg Caplets', brand: 'MediRelief', category: 'Pain Relief', price: 5.49, stock: 230, rating: 4.9, reviews: 870, status: 'In Stock', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=80&auto=format&fit=crop&q=60' },
    { id: 5, name: 'Day & Night Cold Relief Duo', brand: 'ColdShield', category: 'Cold & Flu', price: 14.99, oldPrice: 19.99, stock: 41, rating: 4.5, reviews: 261, status: 'In Stock', image: 'https://images.unsplash.com/photo-1631549916768-4119b255f9f2?w=80&auto=format&fit=crop&q=60' }
  ];

  // دالة الفلترة والبحث الذكي
  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesCat = this.selectedCategory === 'All' || product.category === this.selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                            product.brand.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }
}