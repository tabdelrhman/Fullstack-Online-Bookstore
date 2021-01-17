package com.doc.onlineBookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.doc.onlineBookStore.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel = "bookCategory" , path = "book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
