import { Component, OnInit } from '@angular/core'; 
import { ArticleService } from '../../services/article.service'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-article-list',
  imports: [CommonModule, FormsModule], 
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
  export class ArticleListComponent implements OnInit { 
  articles: any[] = []; 
  
  constructor(private articleService: ArticleService) {} 
    ngOnInit(): void { 
    this.loadArticles(); 
  }

  loadArticles(): void { 
    this.articleService.getArticles().subscribe(data => this.articles = 
    data); 
  }

  deleteArticle(id: string): void { 
    this.articleService.deleteArticle(id).subscribe(() => 
    this.loadArticles()); 
  }
  
  newArticle = { title: '', content: '', message: '' };  // Nouveau modèle pour le formulaire

  addArticle(): void { 
    if (this.newArticle.title && this.newArticle.content) { 
      this.articleService.addArticle(this.newArticle).subscribe(() => { 
      this.loadArticles();                     
      // Recharge la liste après ajout 
      this.newArticle = { title: '', content: '', message: '' };  // Réinitialise le formulaire 
      }); 
    } 
  } 
} 