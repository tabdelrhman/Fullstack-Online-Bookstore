package com.doc.onlineBookStore.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.doc.onlineBookStore.entity.Book;

@CrossOrigin("*")
public interface BookRepository extends JpaRepository<Book, Long>{

	@RestResource(path = "categoryId") // to override rest endPoint name
	Page<Book> findByCategoryId(@Param("id") long id,Pageable page);
	
	@RestResource(path = "searchKeyword") 
	Page<Book> findByNameContains(@Param("name") String keyword,Pageable page);

}
